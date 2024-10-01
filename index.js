



async function fetchPokemon() {
    try {
        const pokemonName = document.getElementById("pokemonname").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error("NOT FOUND");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imageElement = document.getElementById("Pokemonsprite");

        imageElement.src = pokemonSprite;
        imageElement.style.display = "block";
    } catch (error) {
        console.log(error);
        alert("Pokemon not found. Please try again.");
    }
}
