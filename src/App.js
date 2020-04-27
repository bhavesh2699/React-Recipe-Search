import React,{useEffect, useState} from 'react';
import './App.css';

const App=()=>{

	const APP_KEY="7b58dcf7fd0d292afccffd94912fc6fa";
	const APP_ID="ef399f99";

	useEffect(()=>{

	},[]);

	const getRecipes= async ()=>{
		const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data=response.json();
		console.log(data);
	}

	return(

		<div className="App">
		<form className="search-form">
		<input className="search-bar" type="text"/>
		<button className="search-button" type="submit">search</button>
		</form>


		</div>

	);
}

export default App;
