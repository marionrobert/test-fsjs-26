import axios from 'axios'

const API_KEY="840523a722e0ffc0a860538562e81c5e"

export function SearchMoviesWithKeyWord(keyword){
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}&language=en-US`)
    .then((res) =>{
      return res.data
    })
    .catch(err => console.log(err))
}

export function onLoadGetMovie(id){
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    .then((res)=>{
      return res.data
    })
    .catch(err=> console.log(err))
}

export function getCompanyDetails(id){
    return axios.get(`https://api.themoviedb.org/3/company/${id}?api_key=${API_KEY}`)
    .then((res)=>{
      return res.data
    })
    .catch(err=> console.log(err))
}
