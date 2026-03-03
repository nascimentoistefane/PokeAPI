async function buscarPokemon() {
    const valor = document.getElementById("pokemonInput").value.toLowerCase();

    if (!valor) {
        alert("Digite o nome ou número do Pokémon!");
        return;
    }

    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`);
        const dados = await resposta.json();

       
        document.getElementById("pokemonInfo").innerText =
            `${dados.name} #${dados.id}`;

        
        document.getElementById("pokemonImg").src =
            dados.sprites.versions["generation-v"]["black-white"].animated.front_default;

       
        document.getElementById("ataque1").innerText =
            `ATAQUE 1: ${dados.abilities[0].ability.name.toUpperCase()}`;

        document.getElementById("ataque2").innerText =
            `ATAQUE 2: ${dados.abilities[1]?.ability.name.toUpperCase() || "N/A"}`;

    } catch (erro) {
        alert("Pokémon não encontrado!");
    }
}