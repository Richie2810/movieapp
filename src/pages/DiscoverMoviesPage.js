import React, { useState } from "react";
import axios from 'axios'
import ResultCard from './../Components/ResultCard'

export default function DiscoverMoviesPage() {
  const testData = [
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Title: "Star Wars: Episode IV - A New Hope",
    Type: "movie",
    Year: "1977",
    imdbID: "tt0076759"
  }
]

  const [searchText, set_searchText] = useState("Star Wars"); //set to star wars for testing(usually "" empty string)
  const [searchResult, set_searchResult] = useState([])
  const [searchState, set_searchState] = useState('status: idle')


  const search = async () => {
    console.log("Start searching for:", searchText);
  
    const queryParam = encodeURIComponent(searchText);
  
  
    set_searchState('searching....')
    const response = await axios.get(
      `https://omdbapi.com/?apikey=d1ae8168&s=${queryParam}`
    );
    set_searchState('done')
    const myResponse = response.data.Search
    set_searchResult(myResponse)
    // console.log(response.data.Search)
    console.log(typeof(response.data.Search))
  }
// console.log('This is the searchResult', searchResult)
  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={e => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      {searchState}
      {/* {searchResult[0].Title} */}

      {searchResult.map((card,index) => (
      <ResultCard 
        key={index}
        title={card.Title} 
        year={card.Year}
        poster={card.poster}        
      />)
      )}

    </div>
  );
}