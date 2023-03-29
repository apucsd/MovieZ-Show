import React, { useEffect, useState } from "react";
import Cart from "../../Cart/Cart";
import Movie from "../../Movie/Movie";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  // set state for passing data to cart components
  const [calculatedTime, setCalculatedTime] = useState(0);

  // set data to local storage
  const getWatchTime = (watchTime) => {
    setToLocalStorage(watchTime);
  };

  const setToLocalStorage = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousWatchTime) {
      const newWatchTime = previousWatchTime + time;
      localStorage.setItem("watchTime", newWatchTime);
      setCalculatedTime(newWatchTime);
    } else {
      localStorage.setItem("watchTime", time);
      setCalculatedTime(time);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 ">
      <div className="md:col-span-2 border">
        <div className="grid lg:grid-cols-2 gap-4 lg:mx-20 justify-center mx-auto">
          {movies.map((movie) => (
            <Movie getWatchTime={getWatchTime} {...movie}></Movie>
          ))}
        </div>
      </div>
      <div className="border">
        <Cart calculatedTime={calculatedTime}></Cart>
      </div>
    </div>
  );
};

export default Main;
