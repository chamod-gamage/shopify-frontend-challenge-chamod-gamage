import axios from "axios";

export const searchOMDB = async ({ searchTerm, year }) => {
  let res = await axios.get(`http://www.omdbapi.com/`, {
    params: {
      apikey: process.env.REACT_APP_OMDB_KEY,
      s: searchTerm,
      y: year,
      type: "movie",
    },
  });

  console.log(res.data);
  return res.data && res.data.Search ? res.data.Search : [];
};
