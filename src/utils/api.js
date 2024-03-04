import axios from "axios";

const URL = "https://api.themoviedb.org/3/search/movie?api_key=1924bee4aad34818c405e8b00f1ca742&query=batman&page=1"
const URL_Genre = "https://api.themoviedb.org/3/discover/movie?api_key=1924bee4aad34818c405e8b00f1ca742&with_genres=28"

 const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const API = axios.create({
  baseURL:`https://api.themoviedb.org/3/`,
  headers:{
    Authorization: "bearer " + TMDB_TOKEN,
  }
})

export const fetchBySearch= async(mediaType,query,pageNo)=>{
  try{
    const {data} = await API.get(`search/${mediaType}?api_key=1924bee4aad34818c405e8b00f1ca742&query=${query}&page=${pageNo}`);
    return data;
  }
  catch(e){
    throw Error(e);
  }
} 

export const fetchByGenres= async(mediaType,id,page)=>{
  try{
    const {data} = await API.get(`discover/${mediaType}?api_key=1924bee4aad34818c405e8b00f1ca742&with_genres=${id}&page=${page}`);
    return data;
  }
  catch(e){
    throw Error(e);
  }
}



const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "1924bee4aad34818c405e8b00f1ca742";
//const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers= {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params)=>{

  try{
    const {data}=  await axios.get(`https://api.themoviedb.org/3/${url}?api_key=${API_KEY}`, {
      headers,
      params
    });
    return data;
  }catch(err){
    console.log(err);
    return err;
  }
};