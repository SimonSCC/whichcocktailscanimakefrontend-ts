import React, { useState } from "react";

import { Ingredient } from "../Types/Ingredient";
import AllIngredientsDisplay from "./AllIngredientsDisplay";

const MyIngredients: React.FC = () => {

    const updateMyIngredients = () => {
        return Object.keys(localStorage).map(function (item) {
            return { name: item };
        });
    }

    const [myIngredients, setMyIngredients] = useState<Ingredient[]>(updateMyIngredients());

    return (
        <div className="h-full mb-10">
            <div className="text-center border-b-2 border-color15">
                <span className="text-4xl">Ingredients</span>
            </div>
            <div className="flex flex-row w-full h-full pb-10 ">
                <AllIngredientsDisplay
                    activeIngredients={myIngredients}
                    onClickEvent={() => {
                        setMyIngredients(updateMyIngredients());
                    }}
                ></AllIngredientsDisplay>
            </div>
        </div>
    )
}

export default MyIngredients


