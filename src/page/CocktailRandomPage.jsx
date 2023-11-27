import { useEffect, useState } from "react";
import Header from "../component/Header";
import CocktailCard from "../component/CocktailCard";

function CocktailRandomPage (){
    const [cocktailRandom, setCocktailRandom] = useState(null);
    useEffect(() => {
        (async () => {
          const cocktailRandomResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
          const cocktailJs = await cocktailRandomResponse.json();
    
          setCocktailRandom(cocktailJs.drinks[0]);
        })();
      }, []);
    
      return (
        <>
        <Header/>
         <main>
         {cocktailRandom !== null ? <CocktailCard cocktailToDisplay={cocktailRandom} /> : <p>Cocktail en chargement</p>}

          {/**{cocktailRandom !== null ? (
            <article>
              <h1>{cocktailRandom.strDrink}</h1>
              <img src={cocktailRandom.strDrinkThumb} alt={cocktailRandom.strDrink} />
            </article>
          ) : (
            <p>Cocktail en chargement</p>
          )} */}
        </main>
        </>
      );
    }
    
    export default CocktailRandomPage;


{/*// on utilise le hook "useState" pour déclarer une variable appelée “cocktailRamdom“ avec une valeur initiale de null, La fonction “setcocktails“ 
        //est utilisée pour mettre à jour la valeur de "cocktailRamdom".
    if (cocktailRamdom === null){
        // on fais une fonction asyncrone pour utiliser la fonction await
    (async () => {
        // on demande une requete au serveur API avec la fonction fetch et on est en attende la reponse accepté avec await 
    const cocktailRamdomResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        // on reccupére la valeur pour la faire compilé entre json et js
    const cocktailJs = await cocktailRamdomResponse.json();

    setCocktailRamdom(cocktailJs.drinks[0]);
    // ici on stock les valeur réccuperer "useState" et recharger le composant
})(); // "()" rappel de fonction
return(
    <main>
    {randomCocktail != null ? (

        <article>
            <h2>{randomCocktail.strDrink}</h2>

        </article>
        
        ):(
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTop45V0HV7dZGzpUXSSpHL6WgClR5j1ruybEnOO0Th&s" alt="" />

    )}
    </main>
)};


export default CocktailRamdomPage;


/**
 * import { useEffect, useState } from "react";

function CocktailRandomPage() {
  const [coktailRandom, setCocktailRandom] = useState(null);

  // useEffect est une fonction que react me fournit
  // et qui permet d'exécuter du code uniquement à certains
  // chargements du composant (soit le premier, soit à chaque fois etc)
  // Ici, vu qu'on place un tableau vide en deuxième parametre
  // de use effect
  // ça signifie qu'on veut executer la fonction une seule fois
  // au premier chargement du composant
  useEffect(() => {
    (async () => {
      const cocktailRandomResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
      const cocktailJs = await cocktailRandomResponse.json();

      setCocktailRandom(cocktailJs.drinks[0]);
    })();
  }, []);

  return (
    <main>
      {coktailRandom !== null ? (
        <article>
          <h1>{coktailRandom.strDrink}</h1>
          <img src={coktailRandom.strDrinkThumb} alt={coktailRandom.strDrink} />
        </article>
      ) : (
        <p>Cocktail en chargement</p>
      )}
    </main>
  );
}

export default CocktailRandomPage;
*/}