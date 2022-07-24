import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Ingredient } from "../Types/Ingredient";
import { Notebook } from "../Types/Notebook";
import RecipeView from "./RecipeView";

/*What is this module?
A replacement for my google docs site.
You can add an entry which is a recipe for a cocktail; form will pop up to allow to customize what the entry contains. (It will automatically detect what
ingredients is in the cocktail, to support copy poste from recipe)

The form options are ex. Rating for multiple people, ex: Sofie 5 stars, simon 2 stars
Also optional link to video/recipe. 
Then free text for recipe.

Later add functionality to add a recipe from the other views to your notebook.
*/

const MyNotebook: React.FC = () => {
    let notebook: Notebook;

    //Get my saved entries
    const fetchNotebook = () => {
        return axios.post<Notebook>("https://localhost:44316/MyNotebook/MyNotebook", 1);
    }

    const { isLoading, data, isError, error, isFetching } = useQuery(
        'my-notebook',
        fetchNotebook,
        {
            staleTime: 10000, //10 sec
            refetchOnWindowFocus: false,
        }
    )

    if (isError) {
        return (<div><p>Error fetching data...</p></div>)
    }
    if (isLoading || isFetching) {
        return (<div>Loading...</div>)
    }
    if (data?.data !== undefined) {
        notebook = data.data;
        return (

            <div className="h-full flex flex-col">
                <div className="text-center border-b-2 border-color15">
                    <span className="text-4xl">My notebook</span>
                </div>
                <div>{notebook.title}</div>
                <div className="flex flex-row justify-center text-center flex-wrap overflow-auto h-1/1">
                </div>
            </div>
        )
    }
    return <div>Loading</div>
}

export default MyNotebook;