import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {onLoadGetMovie, getCompanyDetails } from '../api/moviedb.jsx';

const Details = () =>{
  const params = useParams()
  const [movie, setMovie] = useState(null)
  const [prodCompanies, setProdCompanies] = useState([])

  useEffect(()=>{
    onLoadGetMovie(params.id)
    .then((res)=>{
      setMovie(res)
      if (prodCompanies.length === 0) {
        let tab = []
        res.production_companies.map((company)=>{
          getCompanyDetails(company.id)
          .then((response)=>{
            tab.push(response)
          })
          .catch(err=>console.log(err))
        })
      setProdCompanies(tab)
      }
    })
    .catch(err=>console.log(err))
  }, [prodCompanies, params.id])


  return (
    <section className="info">
      { movie !== null && <article>
        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}></img>
        <h3>{movie.original_title}</h3>
        <p>{movie.overview}</p>
        <p>{movie.release_date}</p>
        <div className="info">
          {prodCompanies.length > 0 && <ul className="list">
            { prodCompanies.map((company)=>{
              return (
                <li key={company.id}><a href="/" target="_blank">{company.name}</a></li>
              )
            })
            }
            </ul>
          }
        </div>
      </article>
      }
    </section>
  )
}

export default Details;
