import { useState, UseEffect } from "react"
import MovieCard from "../Components/MovieCard"

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Home = () => {
    const [TopMovies, setTopMovies] = useState([])
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json

        setTopMovies(data.results);
    };
    UseEffect(()=> {
        const topRateUrl = `${movieURL}top_rated?${apiKey}`;
        getTopRatedMovies(topRateUrl);

    }, [])
    
    return (
        <div className="container">
            <h2 className="title">
                Melhores Filmes            
            </h2>
            <div className="div-container">
                {TopMovies.length === 0 && <p>Carregando</p> }
                {TopMovies.length > 0 && TopMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
        
    
   
}

export default Home;