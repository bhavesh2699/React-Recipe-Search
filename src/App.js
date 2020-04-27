import React,{useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css';



const App=()=>{

	const APP_KEY="7b58dcf7fd0d292afccffd94912fc6fa";
	const APP_ID="ef399f99";
	const [recipes,setRecipes]=useState([]);
	const [search,setSearch]=useState('');


	useEffect(()=>{
		getRecipes();			
	},[]);

	const getRecipes= async ()=>{
		const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data= await response.json();
		setRecipes(data.hits);
	}

	return(

		<div className="App">
		<form className="search-form">
		<input className="search-bar" type="text" value={search} onChange={}/>
		<button className="search-button" type="submit">search</button>
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
