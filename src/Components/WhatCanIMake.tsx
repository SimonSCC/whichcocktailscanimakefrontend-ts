import React from "react";
import { Ingredient } from "../Types/Ingredient";



const WhatCanIMake = () => {
    let ingredients: Ingredient[] = Object.keys(localStorage).map(function (item) {
        return { name: item };
    });

    if (ingredients.length <= 0)
        ingredients.push({ name: "You have no ingredients!" })



    return (

        <div className="h-full flex flex-col">
            <div className="text-center border-b-2 border-color15">
                <span className="text-4xl">What can I make</span>
            </div>

            <div className="flex flex-row justify-center text-center flex-wrap overflow-auto h-1/1">
                <RecipeView ingredients={ingredients}></RecipeView>
            </div>
        </div>

    )
}

export default WhatCanIMake;