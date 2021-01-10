import axios from "axios";

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

  console.log(res.data);
  return res.data && res.data.Search && res.data.totalResults
    ? { results: res.data.Search, total: res.data.totalResults, error: "" }
    : {
        results: [],
        total: 0,
        error:
          "Unfortunately, we could not find results that matched your search. Please try again with a different search paramaters.",
      };
};

export const getMovie = async ({ id }) => {
  let res = await axios.get(`https://www.omdbapi.com/`, {
    params: {
      apikey: process.env.REACT_APP_OMDB_KEY,
      i: id,
    },
  });

  console.log(res.data);
  return res.data;
};
