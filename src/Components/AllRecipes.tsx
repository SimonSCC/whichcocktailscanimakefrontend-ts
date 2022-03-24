import React, { useEffect, useState } from "react";
import axios from "axios";
import IndividualRecipe from "./IndividualRecipe";
import { Recipe } from "../Types/Recipe";



const AllRecipes = () => {

    const [allAvailableRecipes, setAllAvailableRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        axios.get("https://localhost:44316/CocktailOptions/AllRecipies").then((response) => {
            setAllAvailableRecipes(response.data);
        });
    }, [])


    const recipesDisplay: () => JSX.Element = () => {

        if (allAvailableRecipes.length > 0) {
            return <>{allAvailableRecipes.map((recipe: Recipe) => (
                <IndividualRecipe
                    measurementOfIngredients={recipe.measurementOfIngredients}
                    title={recipe.title}
                    videoInfo={recipe.videoInfo} />
            ))
            }</>
        } else
            return (
                <div>
                    <h1>Could not retrieve any recipes..</h1>
                </div>
            );
    }

    return (
        <div className="h-full flex flex-col">
            <div className="text-center border-b-2 border-color15">
                <span className="text-4xl">All Recipes</span>
            </div>

            <div className="flex flex-row justify-center text-center flex-wrap overflow-auto h-1/1">{
                recipesDisplay()
            }</div>
        </div>
    )
}








export default AllRecipes;
