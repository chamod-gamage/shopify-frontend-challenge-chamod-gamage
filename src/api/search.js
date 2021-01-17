import axios from "axios";

//Search OMDB given search term, year, and page
export const searchOMDB = async ({ searchTerm, year, page }) => {
  let res = await axios.get(`https://www.omdbapi.com/`, {
    params: {
      apikey: process.env.REACT_APP_OMDB_KEY,
      s: searchTerm,
      y: year,
      type: "movie",
      page,
    },
  });

  let error =
    res.data && res.data.Error === "Too many results."
      ? "your search yielded too many results"
      : "we could not find results that matched your search";

  return res.data && res.data.Search && res.data.totalResults
    ? { results: res.data.Search, total: res.data.totalResults, error: "" }
    : {
        results: [],
        total: 0,
        error: `Unfortunately, ${error}. Please try again with a different search paramaters.`,
      };
};

//Get the information for a movie given its IMDb id
export const getMovie = async ({ id }) => {
  let res = await axios.get(`https://www.omdbapi.com/`, {
    params: {
      apikey: process.env.REACT_APP_OMDB_KEY,
      i: id,
    },
  });
  return res.data;
};
