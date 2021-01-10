import React from "react";
import IMDBLogo from "../../images/IMDB_Logo.svg";
import { Button } from "@material-ui/core";
import "../../App.css";
export const ResultItem = (props) => {
  const { result, nominees, setNominees } = props;

  const handleNomination = () => {
    console.log(nominees);
    setNominees(nominees ? nominees.concat([result]) : [result]);
    console.log(nominees);
    return;
  };
  return (
    <>
      <div className="row-item">
        <div className="row-text">
          <p>{`${result.Title} (${result.Year})`}</p>
          &nbsp;
        </div>
        <div className="row-buttons">
          <a
            href={`https://www.imdb.com/title/${result.imdbID}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ width: 60 }} src={IMDBLogo} alt="IMDB logo" />
          </a>
          &nbsp;
          <Button
            variant="contained"
            disabled={
              (nominees &&
                nominees.length &&
                nominees
                  .map((nominee) => nominee.imdbID)
                  .includes(result.imdbID)) ||
              nominees.length > 4
            }
            onClick={handleNomination}
            className="row-buttons-end"
          >
            NOMINATE
          </Button>
        </div>
      </div>
    </>
  );
};
