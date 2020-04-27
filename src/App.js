import React,{useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css';



const App=()=>{

	const APP_KEY="7b58dcf7fd0d292afccffd94912fc6fa";
	const APP_ID="ef399f99";
	const [recipes,setRecipes]=useState([]);
	const [search,setSearch]=useState('');
	const [query,setQuery]=useState('chicken');


	useEffect(()=>{
		getRecipes();			
	},[query]);

	const getRecipes= async ()=>{
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data= await response.json();
		setRecipes(data.hits);
	};


	const updateSearch= (e)=>{
		setSearch(e.target.value);
	};

	const querySubmit= (e)=>{
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};


	return(

		<div className="App">
		<form className="search-form" onSubmit={querySubmit}>
		<input className="search-bar" type="text" value={search} onChange={updateSearch}/>
		<button className="search-button" type="submit" >search</button>
		</form>
		{recipes.map(recipe=>(
			<Recipe 
			key={recipe.recipe.label}
			title={recipe.recipe.label} 
			calories={recipe.recipe.calories} 
			image={recipe.recipe.image}/>
		))}


		</div>

	);
};

export default App;
