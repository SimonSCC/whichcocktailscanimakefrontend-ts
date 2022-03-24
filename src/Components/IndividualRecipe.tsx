import React from "react";
import { MeasurementOfIngredient, Recipe, TypeOfMeasurement } from "../Types/Recipe";


const IndividualRecipe: React.FC<Recipe> = (recipe: Recipe) => {

    const displayIngredientWithMeasurement = (ingredient: MeasurementOfIngredient) => {

        if (ingredient.measurement.measurementType === TypeOfMeasurement.note) {
            return ingredient.ingredient.name;
        } else {
            return ingredient.measurement.amount + ingredient.measurement.measurementType + " " + ingredient.ingredient.name;
        }

    }

    return (
        <div className="mx-16 w-1/3 text-center flex flex-col items-center defaultBox ">
            <h2 className="mb-2">{recipe.title}</h2>
            <a href={"https://www.youtube.com/watch?v=" + recipe.videoInfo.link}>
                <img src={recipe.videoInfo.thumbnail.url} width={250} className="" alt="Thumbnail"></img>
            </a>
            <div>
                <p>
                    {recipe.measurementOfIngredients.map(function (ingredient) {
                        return (
                            <div>
                                <p>{displayIngredientWithMeasurement(ingredient)}</p>
                            </div>
                        );
                    })}
                </p>
            </div>
        </div>
    )
}

export default IndividualRecipe;
