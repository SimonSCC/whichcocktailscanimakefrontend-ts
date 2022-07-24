import React, { useEffect, useState } from "react";
import axios from "axios";
import IndividualRecipe from "./IndividualRecipe";
import { Recipe } from "../Types/Recipe";
import { useQuery } from "react-query";




const AllRecipes = () => {

    // const [allAvailableRecipes, setAllAvailableRecipes] = useState<Recipe[]>([]);
    let allAvailableRecipes: Recipe[] = [];

    const fetchRecipes = () => {
        return axios.get<Recipe[]>("https://localhost:44316/CocktailOptions/AllRecipies");
    }

    const { isLoading, data, isError, error, isFetching } = useQuery(
        'all-recipes',
        fetchRecipes,
        {
            staleTime: 60000, //60 sec
            refetchOnWindowFocus: false,

        }


    )

    console.log({ isLoading, isFetching });


    // useEffect(() => {
    //     axios.get("https://localhost:44316/CocktailOptions/AllRecipies").then((response) => {
    //         setAllAvailableRecipes(response.data);
    //     });
    // }, [])

    if (isError) {
        console.log({ error });

        return (<div><p>Error fetching data...</p></div>)
    }

    if (isLoading || isFetching) {
        return (<div>Loading...</div>)
    }

    if (data?.data !== undefined) {
        console.log("Data received, setting Recipes.")
        allAvailableRecipes = data.data;
    }

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
