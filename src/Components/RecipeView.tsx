import React, { useEffect, useState } from "react";
import axios from "axios";
import { Ingredient } from "../Types/Ingredient";
import { Recipe } from "../Types/Recipe";
import IndividualRecipe from "./IndividualRecipe";


interface Props {
    activeIngredients: Ingredient[];
}

const RecipeView = ({ activeIngredients }: Props) => {


    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {

        console.log(activeIngredients);

        let asJson: string = JSON.stringify(activeIngredients);
        console.log(asJson);
        axios.post("https://localhost:44316/CocktailOptions/WhatCanIMake", activeIngredients).then((response) => {
            console.log(response);

            setRecipes(response.data);

        });

    }, [activeIngredients])




    if (recipes.length > 0) {
        return recipes.map(function (recipe: Recipe) {
            return (
                <IndividualRecipe measurementOfIngredients={recipe.measurementOfIngredients} title={recipe.title} videoInfo={recipe.videoInfo} ></IndividualRecipe >
            );
        });
    } else
        return (
            <div>
                <h1>Could not retrieve any recipes..</h1>
            </div>
        );
}


export default RecipeView;
