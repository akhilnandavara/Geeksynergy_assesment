import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import CompanyInfo from "./CompanyInfo";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [indexes, setIndexes] = useState([0, 1]); // Track current indexes for two cards

  useEffect(() => {
    axios
      .post("https://hoblist.com/api/movieList", {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      })
      .then((response) => {
        const sortedMovies = response.data.result.sort((a, b) => b.totalVoted - a.totalVoted);
        setMovies(sortedMovies);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const releasedDate = (timeSec) => {
    const date = new Date(timeSec * 1000);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const toTitleCase = (input) => {
    const processString = (str) => {
      if (typeof str !== "string") {
        throw new TypeError("Array elements should be strings");
      }
      const words = str.split(" ");
      const titleCasedWords = words.map((word) => {
        return word
          .split(",")
          .map((subWord) => {
            return subWord.charAt(0).toUpperCase() + subWord.slice(1).toLowerCase();
          })
          .join(",");
      });
      return titleCasedWords.join(" ");
    };

    if (input === undefined || input === null) {
      return ""; // Return an empty string for undefined or null input
    } else if (Array.isArray(input)) {
      return input.map(processString);
    } else if (typeof input === "string") {
      return processString(input);
    } else {
      throw new TypeError("Input should be either a string or an array of strings");
    }
  };

  const handleSort = (index, direction) => {
    const newIndexes = [...indexes];
    const currentIndex = newIndexes[index];
    const sortedMovies = [...movies].sort((a, b) => b.totalVoted - a.totalVoted);

    if (direction === "up") {
      newIndexes[index] = (currentIndex - 1 + movies.length) % movies.length;
    } else {
      newIndexes[index] = (currentIndex + 1) % movies.length;
    }

    setIndexes(newIndexes);
    setMovies(sortedMovies);
  };

  return (
    <div>
      <button onMouseEnter={()=>setShowInfo(true)} onMouseLeave={()=>setShowInfo(false)}>
        Company Info
      </button>
        <div  id="contact-info" hidden={!showInfo}>
        <CompanyInfo/>
        </div>
      <h1>Movies</h1>
      <ul className="container">
        {indexes.map((currentIndex, i) => (
          <div key={i} className="card">
            <div className="card-info">
              <div className="votes-sort">
                <button onClick={() => handleSort(i, "up")} disabled={currentIndex === 0} className={`${currentIndex === 0 ? "bg-diabled":"bg-active"}`}>
                  <BiSolidUpArrow />
                </button>
                <p>{movies[currentIndex]?.totalVoted}</p>
                <button onClick={() => handleSort(i, "down")} disabled={currentIndex === movies.length - 1} className={`${currentIndex === movies.length - 1 ? "bg-diabled":"bg-active"}`}>
                  <BiSolidDownArrow />
                </button>
                Votes
              </div>
              <img className="image" src={movies[currentIndex]?.poster} alt={movies[currentIndex]?.title} />
              <div>
                <h2>{movies[currentIndex]?.title}</h2>
                <p>Genre: {toTitleCase(movies[currentIndex]?.genre)}</p>
                <p>Director: {movies[currentIndex]?.director}</p>
                <p>Starring: {toTitleCase(movies[currentIndex]?.stars)}</p>
                <p>
                  Mins | {movies[currentIndex]?.language} | {releasedDate(movies[currentIndex]?.releasedDate)}
                </p>
                <div className="card-info">
                  <p>{movies[currentIndex]?.pageViews} Views</p>
                  <p>| Voted by {movies[currentIndex]?.totalVoted} </p>
                </div>
              </div>
            </div>
            <button>Watch Trailer</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
