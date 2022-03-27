import axios from 'axios';
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { Ingredient } from '../Types/Ingredient';

//Ideas for component:
// Make Ingredient boxes and make them addable to the player's ingredient list
const ExpandRepertoire: React.FC = () => {

    let myIngredients: Ingredient[] = Object.keys(localStorage).map(function (item) {
        return { name: item };
    });
    //Should probably load these ingredients in app.tsx, then useEffect will only run when that is changed. It runs everytime because it is generated in each 
    //function component.

    const fetchIngredients = () => {
        console.log("fetching");

        let nameArr: string[] = [];
        for (let i = 0; i < myIngredients.length; i++) {
            nameArr.push(myIngredients[i].name);
        }
        //Server needs collection of string with the name of the ingredients
        return axios.post<Ingredient[]>("https://localhost:44316/CocktailOptions/HowToExpandRepertoire", nameArr);
    }


    const { isLoading, data, isError, error, isFetching } = useQuery(
        'expand-ingredient-list',
        fetchIngredients,
        {
            // staleTime: 60000, //60 sec
            refetchOnWindowFocus: false,

        }
    )

    // useEffect(() => {

    // }, [myIngredients])
    console.log({ isLoading });

    if (isLoading || isFetching)
        return (<div>Loading...</div>)

    if (error)
        return (<div>An error occurred..</div>)

    return (

        <div className="h-full flex flex-col text-center">
            <div className="text-center border-b-2 border-color15">
                <span className="text-4xl">How to expand your repertoire</span>
            </div>
            <span className="text-xl"> The list below describes how many new recipes you can make by acquiring the attributed ingredient.</span>



            <div className="flex flex-row justify-center text-center flex-wrap overflow-auto h-1/1">{
                <div>
                    <>{data?.data.map((ingredient: Ingredient) => (
                        <div>
                            <p>{ingredient.name} - {ingredient.newRecipes} new recipes</p>
                        </div>
                    ))
                    }</>
                </div>
            }</div>
        </div>
    )
}

export default ExpandRepertoire