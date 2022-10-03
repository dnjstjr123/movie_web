import axios from "axios";
import Header from "../components/Header";
import Movie from "../components/Movie";
import "./Home.css";

import { useState, useEffect } from "react";

const Home = () => {
  const [
    state = {
      isLoading: true,
      movies: [],
      value: "",
    },
    setState,
  ] = useState();

  const getMovies = async () => {
    const ID_KEY = "VGmrPKGe4JkRyqyPfjz9";
    const SECRET_KEY = "OCq01QxZaZ";
    const search = state.value;

    try {
      if (search === "") {
        setState({ movies: [], isLoading: false });
      } else {
        const {
          data: { items },
        } = await axios.get("/api/v1/search/movie.json", {
          params: {
            query: search,
            display: 1,
          },
          headers: {
            "X-Naver-Client-Id": ID_KEY,
            "X-Naver-Client-Secret": SECRET_KEY,
          },
        });

        setState({ movies: items, isLoading: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Effect!");
    getMovies();
  });

  const handleChange = (e) => {
    setState({ value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  };

  return (
    <div>
      <Header />
      <section className="container">
        {state.isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="input_div">
              <h1>영화 검색</h1>
              <input
                className="input_search"
                type="text"
                value={state.value}
                onChange={handleChange}
                placeholder="영화를 검색하세요."
              />
            </div>
            <div className="movies">
              {state.movies &&
                state.movies.map((movie) => (
                  <Movie
                    id={movie.link}
                    title={movie.title}
                    poster={movie.image}
                    actors={movie.acter}
                    year={movie.pubDate}
                    rating={movie.userRating}
                  />
                ))}
            </div>
          </form>
        )}
      </section>
    </div>
  );
};

export default Home;
