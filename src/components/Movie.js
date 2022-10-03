import "./Movie.css";
import PropTypes from "prop-types";

const Movie = ({ id, title, poster, actors, year, rating }) => {
  const title_list = title
    .replace(/&amp;/g, "&")
    .replace("<b>", "")
    .replace("</b>", "");
  const actors_list = actors.substring(0, actors.length - 1).split("|");

  return (
    <div className="movie">
      <a href={id} target="_blanck">
        <img src={poster} alt={title_list} title={title_list} />
      </a>
      <div className="movie_data">
        <h3 className="movie_title">{title_list}</h3>
        <h5 className="movie_year">{year}</h5>
        <h5 className="movie_rating">{rating}</h5>
        <p className="movie_actors">
          {actors_list.map((actor, index) => {
            var actor_link =
              "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=" +
              actor;
            if (actors_list.length - 1 > index) {
              return (
                <a href={actor_link} target="_blank" rel="noopener noreferrer">
                  {actor}, &nbsp;
                </a>
              );
            } else {
              return (
                <a href={actor_link} target="_blank" rel="noopener noreferrer">
                  {actor}
                </a>
              );
            }
          })}
        </p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default Movie;
