import { useState, UseEffect } from "react"
import {MovieCard} from "../Components/MovieCard"

const movieURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY


const Home = () => {
    const [TopMovie, setTopMovie] = useState([])
    const getTopRateMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json

        setTopMovie(data.results);
    };
    UseEffect(()=> {
        const topRateUrl = `${movieURL}top_rated?${apiKey}`;
        getTopRateMovie(topRateUrl);

    }, [])
    
    return (
        <div className="container">
            <h2 className="title">
                Melhores Filmes            
            </h2>
            <div className="div-container">
                {TopMovie.length === 0 && <p>Carregando</p> }
                {TopMovie.length > 0 && TopMovie.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
        
    
   
}

export default Home;