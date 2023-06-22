import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchMoviesWithKeyWord } from '../api/moviedb.jsx'


const Home = () => {
  const [movies, setMovies] = useState(null)

  const handleInputChange = (e) =>{
    SearchMoviesWithKeyWord(e.currentTarget.value)
    .then((res) => {
      setMovies(res.results)
    })
    .catch(err=>console.log(err))
  }

  return (
    <div>
      <h2>Moteur de recherche de film</h2>
      <div className="form">
        <h3>Trouver un film: </h3>
        <form>
          <input type="text" onChange={handleInputChange} />
          <button type="submit" id="send">Rechercher</button>
        </form>
      </div>
      <div className="info">
        { movies !== null && <ul className="list">
          {movies.map((movie)=>{
            return (
              <li key={movie.id}><Link to={`/details/${movie.id}`}>{movie.title}</Link></li>
            )
          })}
        </ul>
        }
      </div>

    </div>

  )
}

export default Home
