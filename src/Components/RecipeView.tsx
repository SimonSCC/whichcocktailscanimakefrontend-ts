import React, { useEffect, useState } from "react";
import axios from "axios";
import { Ingredient } from "../Types/Ingredient";
import { Recipe } from "../Types/Recipe";
import IndividualRecipe from "./IndividualRecipe";


interface Props {
    activeIngredients: Ingredient[];
}

const RecipeView: React.FC<Props> = ({ activeIngredients }: Props) => {


    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        console.log("Should send: " + activeIngredients);
        let nameArr: string[] = [];
        for (let i = 0; i < activeIngredients.length; i++) {
            nameArr.push(activeIngredients[i].name);
        }
        //Server needs collection of string with the name of the ingredients
        axios.post("https://localhost:44316/CocktailOptions/WhatCanIMake", nameArr).then((response) => {
            console.log("Sent request" + response);

            setRecipes(response.data);

        });

    }, [activeIngredients])



    //Below is solution to map, from this site: https://stackoverflow.com/questions/62702485/component-cannot-be-used-as-a-jsx-component-its-return-type-element-is-not

    if (recipes.length > 0) {
        return <>{recipes.map((recipe: Recipe) =>
        (
            <IndividualRecipe measurementOfIngredients={recipe.measurementOfIngredients} title={recipe.title} videoInfo={recipe.videoInfo} ></IndividualRecipe >
        )
        )
        }</>
    } else
        return (
            <div>
                <h1>Could not retrieve any recipes..</h1>
            </div>
        );
}


export default RecipeView;
