import { useEffect, useState } from "react";
import Header from "./Header";

function IngredientsPage(){
    const [ingredients, setIngredients] = useState(null);

    useEffect (() => {
    (async () => {
        const ingredientsApiReponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
        const ingredientsApi = await ingredientsApiReponse.json();

        setIngredients(ingredientsApi.drinks);
    })();
}, [])
    return(
        <main>
            <Header/>
            {ingredients ?(
                <section>
                {ingredients.map((ingredient) => {
                    
                    return(
                   
                    <article>{ingredient.strIngredient1}</article>)
                }

                )}
                </section>
            ) : (
                <p>pas d'ingredients</p>
            )
            }
        </main>
    )
        };
export default IngredientsPage;