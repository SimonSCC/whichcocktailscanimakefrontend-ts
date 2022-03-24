import React, { useState } from "react";
import axios from "axios";

import { Ingredient } from "../Types/Ingredient";
import AllIngredientsDisplay from "./AllIngredientsDisplay";

const MyIngredients = () => {
    const [myIngredients, setMyIngredients] = useState<Ingredient[]>([]);

    const updateMyIngredients = () => {
        setMyIngredients(Object.keys(localStorage).map(function (item) {
            return { name: item };
        }));
    }
    updateMyIngredients();

    return (
        <div className="h-full mb-10">
            <div className="text-center border-b-2 border-color15">
                <span className="text-4xl">Ingredients</span>
            </div>
            <div className="flex flex-row w-full h-full pb-10 ">
                <AllIngredientsDisplay
                    activeIngredients={myIngredients}
                    onClickEvent={() => {
                        updateMyIngredients();
                    }}
                ></AllIngredientsDisplay>
            </div>
        </div>
    )
}

export default MyIngredients


