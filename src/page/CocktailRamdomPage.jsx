import { useState } from "react";

function CocktailRamdomPage (){
    const [cocktailRamdom, setCocktailRamdom] = useState(null);
// on utilise le hook "useState" pour déclarer une variable appelée “cocktailRamdom“ avec une valeur initiale de null, La fonction “setcocktails“ 
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
})();
return (
    <main>
        {cocktails ? (
            <>
                <article>Cocktails frais et prêts:</article>
                {cocktails.map((cocktail) => (
                    <div key={cocktail.idDrink}>                            
                        <h2>{cocktail.strDrink}</h2>
                        <img src= {cocktail.strDrinkThumb} alt="" />
                    </div>
                ))}
            </>
        ) : null}
    </main>
);
}

export default CocktailRamdomPage;
