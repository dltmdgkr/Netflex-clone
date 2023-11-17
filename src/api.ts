import axios from "axios";

const API_KEY = "0478a1c2272233ac50016719d59b4814";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export const getMovies = async () => {
  const response = await axios.get(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`
  );
  return response.data;
};
