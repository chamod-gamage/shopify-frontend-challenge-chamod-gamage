import Search from "./components/Search";
import Results from "./components/Results";
import Nominees from "./components/Nominees";
import LinkDialog from "./components/Nominees/LinkDialog";
import { searchOMDB, getMovie } from "./api/search";
import "./App.css";
import clsx from "clsx";
import React, { useState, useEffect } from "react";

import moment from "moment";

export const Interface = (props) => {
  useEffect(() => {
    console.log("use effect");
    if (window.location.href.includes("shared=true")) {
      console.log("includes");
      const urlParams = new URLSearchParams(window.location.href);
      console.log(urlParams.getAll("nominees[]"));

      async function fetchMovies() {
        Promise.all(
          urlParams.getAll("nominees[]").map((id) => getMovie({ id }))
        ).then((values) => setNominees(values));
      }

      fetchMovies();
    }
  }, []);

  const [nominees, setNominees] = useState([]);
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState("");
  const [year, setYear] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [pending, setPending] = useState(false);

  const handleSubmit = async ({ searchTerm, year, pageNumber }) => {
    setPending(true);
    setPage(pageNumber);
    let payload = moment(year).isValid()
      ? {
          searchTerm,
          year: moment(year).format("YYYY"),
          page: pageNumber,
        }
      : { searchTerm, page: pageNumber };
    let res = await searchOMDB(payload);
    console.log(JSON.stringify(res));
    setResults(res.results);
    setTotal(res.total);
    setPending(false);
    return;
  };

  return (
    <>
      <br />
      <Search
        year={year}
        setYear={setYear}
        term={term}
        setTerm={setTerm}
        searchOMDB={handleSubmit}
      />
      <br />
      {nominees.length > 4 && (
        <>
          <LinkDialog nominees={nominees} />
          <br />
        </>
      )}
      <div className={clsx("row", "middle-section")}>
        <div className="col-md-6">
          <Results
            loading={pending}
            total={total}
            page={page}
            handlePageChange={(pageNumber) => {
              pageNumber > 0 &&
                pageNumber <= Math.ceil(total / 10) &&
                handleSubmit({ searchTerm: term, year, pageNumber });
            }}
            results={results}
            nominees={nominees}
            setNominees={setNominees}
          />
        </div>
        <div className="col-md-6">
          <Nominees nominees={nominees} setNominees={setNominees} />
        </div>
      </div>
    </>
  );
};

export default Interface;
