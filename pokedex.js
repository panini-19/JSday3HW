// const pokemonData = async () => {
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon')
//     const data = await response.json()
//     console.log(data)
// }
// pokemonData()

const form=document.querySelector('form')
const table=document.querySelector('.pokemon')


const displayPokemon = (pokemon) => {
// clears table
    table.innerHTML = "" 
//adds pokemon name to row
    const pokeName = document.createElement('tr')
    pokeName.innerHTML = `<td>${pokemon.name}</td>`
// adds the pokeName row to the table
    table.appendChild(pokeName)

// same steps for image and abilties

    const pokeImg = document.createElement('tr')
    pokeImg.innerHTML = `<td><img src="${pokemon.sprites.front_default}"</td>`
    table.appendChild(pokeImg)

    const pokeAbilities = document.createElement('tr')
    pokeAbilities.innerHTML = `<td>Abilities: ${pokemon.abilities.map(ability => ability.ability.name)}</td>`
    table.appendChild(pokeAbilities)
}
const pokemonData = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    displayPokemon(data)
}

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const poke_input =(form[0].value)
    pokemonData(poke_input)

})