import { useEffect, useState } from "react";
import Header from "../component/Header";

function CategoriesPage() {
  const [categories, setCategories] = useState(null);
  // => on utilise le hook "useState" pour déclarer une variable appelée “categories“ avec une valeur initiale de null, La fonction “setcategories“ 
        //est utilisée pour mettre à jour la valeur de "categories".


  useEffect(() => {
    (async () => {
      const categoriesFetchResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
      const categoriesFetch = await categoriesFetchResponse.json();

      setCategories(categoriesFetch.drinks);
    })();
  }, []);

  console.log("rendu du composant");

  return (
    <>
    <Header />
    <main>
      {categories !== null ? (
        <div>
          {categories.map((category) => {
            return (
              <article>
                <h2>{category.strCategory}</h2>
              </article>
            );
          })}
        </div>
      ) : (
        <p>En cours de chargement ...</p>
      )}
    </main>
    </>
  );
}

export default CategoriesPage;