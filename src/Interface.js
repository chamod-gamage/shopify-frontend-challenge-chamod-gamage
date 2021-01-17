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
  //useEffect parses URL for encoded nominees list, if list's been encoded
  useEffect(() => {
    if (window.location.href.includes("shared=true")) {
      setProcessing(true);
      const urlParams = new URLSearchParams(window.location.href);

      async function fetchMovies() {
        setProcessing(true);
        Promise.all(
          urlParams.getAll("nominees[]").map((id) => getMovie({ id }))
        ).then((values) => {
          setNominees(values);
          setProcessing(false);
          return;
        });
      }

      fetchMovies();
    }
  }, []);

  //grab nominees from localstorage, if not there nominees = []
  const [nominees, setNominees] = useState(
    JSON.parse(localStorage.getItem("nominees")) || []
  );
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState("");
  const [year, setYear] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [pending, setPending] = useState(false); //true if awaiting results
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false); //true if awaiting nominees from URL or localstorage

  //useEffect to set localstorage item for nominees whenever nominees (in state) changes
  useEffect(() => {
    nominees &&
      nominees.length &&
      localStorage.setItem("nominees", JSON.stringify(nominees));
  }, [nominees]);

  const handleSubmit = async ({ searchTerm, year, pageNumber }) => {
    setPending(true);
    setError("");
    setPage(pageNumber);
    let payload = moment(year).isValid()
      ? {
          searchTerm,
          year: moment(year).format("YYYY"),
          page: pageNumber,
        }
      : { searchTerm, page: pageNumber };
    let res = await searchOMDB(payload);
    setResults(res.results);
    setTotal(res.total);
    setError(res.error);
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
            error={error}
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
          <br />
        </div>
        <div className="col-md-6">
          <Nominees
            loading={processing}
            nominees={nominees}
            setNominees={setNominees}
          />
        </div>
      </div>
    </>
  );
};

export default Interface;
