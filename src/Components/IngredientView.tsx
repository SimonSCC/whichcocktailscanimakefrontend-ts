import React from 'react'
import { Ingredient } from '../Types/Ingredient';

interface Props {
    allAvailableIngredients: Ingredient[];
    activeIngredients?: Ingredient[];
    onClickEvent: () => void;
    btnText: string;
}


const IngredientView: React.FC<Props> | any = ({ allAvailableIngredients, activeIngredients, onClickEvent, btnText }: Props) => {

    let filteredIngredients: Ingredient[] | undefined;
    if (activeIngredients && allAvailableIngredients && btnText === "Add" && allAvailableIngredients.length > 0) {
        // console.log("ingredients " + allAvailableIngredients.length);
        // console.log("active " + activeIngredients.length);
        filteredIngredients = allAvailableIngredients.slice(); //Copies the array, instead of arr = arr which would just store the pointer
        for (let y = 0; y < activeIngredients.length; y++) {
            for (let i = 0; i < filteredIngredients.length; i++) {
                if (filteredIngredients[i].name === activeIngredients[y].name) {
                    filteredIngredients.splice(i, 1);
                }
            }
        }
        console.log("Filtered: " + filteredIngredients.length);
    } else {
        filteredIngredients = activeIngredients;
    }


    let onclick: (item: Ingredient) => void;
    if (btnText) {
        onclick =
            btnText.toLowerCase() === "add"
                ? function (item) {
                    console.log("add clicked");
                    localStorage.setItem(item.name, "true");
                    onClickEvent();
                }
                : function (item) {
                    console.log("Delete clicked");
                    localStorage.removeItem(item.name);
                    onClickEvent();
                };
    }
    if (filteredIngredients !== undefined && filteredIngredients.length > 0) {
        if (!btnText) {
            return filteredIngredients.map(function (item) {
                return (
                    <div className="flex flex-row items-center p-2 border-2 border-color3 rounded-md m-2 bg-red-50 w-1/4 justify-center flex-wrap ">
                        <p> {item.name}</p>{" "}
                    </div>
                );
            });
        }
        return filteredIngredients.map(function (item) {
            return (
                <div
                    className={` ${btnText === "Delete" ? "bg-green-900 " : "bg-color1"
                        } flex flex-row items-center p-2 border-2 border-color3 rounded-md m-2  w-1/4`}
                >
                    <button
                        className={`${btnText === "Delete" ? "bg-red-800" : "bg-green-600 "}  text-color5 defaultBtn scale-75 p-3 hover:scale-90`}
                        onClick={() => onclick(item)}
                    >
                        {btnText}
                    </button>
                    <p> {item.name}</p>{" "}
                </div>
            );
        });
    } else {
        return <div>No Ingredients</div>;
    }
}

export default IngredientView