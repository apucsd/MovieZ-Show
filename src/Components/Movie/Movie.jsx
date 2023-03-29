import React from "react";

const Movie = ({
  movieName,
  watchTime,
  description,
  poster,
  category,
  imdRating,
  getWatchTime,
}) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="p-3">
        <img className="h-64 w-full" src={poster} alt="movie" />
      </figure>

      <div className="card-body text-slate-600">
        <h2 className="card-title mt-3 text-black">{movieName}</h2>
        <hr />
        <p>Category: {category}</p>
        <div className="flex">
          <p>WatchTime: {watchTime}</p>
          <p>IMDb Rating: {watchTime}</p>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => getWatchTime(watchTime)}
            className="btn btn-primary w-full"
          >
            Book NOw
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
