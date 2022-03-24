import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Ingredient } from '../Types/Ingredient';
import IngredientView from './IngredientView';


interface Props {
    onClickEvent: () => void;
    activeIngredients: Ingredient[];

}

const AllIngredientsDisplay: React.FC<Props> = ({ onClickEvent, activeIngredients }: Props) => {

    const [allAvailableIngredients, setAllAvailableIngredients] = useState([])

    useEffect(() => {
        axios.get("https://localhost:44316/CocktailOptions/AllIngredients").then((response) => {
            setAllAvailableIngredients(response.data);
        });
    }, [])



    return (
        <div className="defaultBox w-full overflow-auto">
            <span className="text-xl">All ingredients</span>
            <div className="flex items-center flex-wrap justify-center text-left">
                <IngredientView allAvailableIngredients={allAvailableIngredients} onClickEvent={onClickEvent} btnText="Delete"></IngredientView>

                <IngredientView
                    allAvailableIngredients={allAvailableIngredients}
                    activeIngredients={activeIngredients}
                    onClickEvent={onClickEvent}
                    btnText="Add"
                ></IngredientView>
            </div>
        </div>)

}

export default AllIngredientsDisplay