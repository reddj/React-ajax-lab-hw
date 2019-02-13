import React from 'react'

const PokemonList = (props) => {
	console.log(props)
	const pokemonList = props.pokemon.map((pokemon, index) => {
		return (
			<li key={index}>
					{pokemon.name}
				</li>
	)})

	return (
	<div>
		<h3>Pokemon</h3>
		<ul>
			{pokemonList}
		</ul>
	</div>
	)
    
}

export default PokemonList