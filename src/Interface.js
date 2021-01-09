import "./App.css";
import Search from "./components/Search";
import Results from "./components/Results";
import Nominees from "./components/Nominees";
import { searchOMDB } from "./api/search";
import "./App.css";
import React, { useState } from "react";

import moment from "moment";

export const Interface = (props) => {
  const [nominees, setNominees] = useState([]);
  const [results, setResults] = useState([]);

  const handleSubmit = async ({ searchTerm, year }) => {
    let payload = moment(year).isValid()
      ? {
          searchTerm,
          year: moment(year).format("YYYY"),
        }
      : { searchTerm };
    let res = await searchOMDB(payload);
    console.log(JSON.stringify(res));
    setResults(res);
    return;
  };

  return (
    <>
      <Search searchOMDB={handleSubmit} />
      <br />
      <Results
        results={results}
        nominees={nominees}
        setNominees={setNominees}
      />
      <br />
      {nominees.length > 0 ? (
        <Nominees nominees={nominees} setNominees={setNominees} />
      ) : (
        <div />
      )}
    </>
  );
};

export default Interface;
