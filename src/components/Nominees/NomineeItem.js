import React from "react";
import IMDBLogo from "../../images/IMDB_Logo.svg";
import { Button } from "@material-ui/core";
import "../../App.css";
export const NomineeItem = (props) => {
  const { nominee, nominees, setNominees } = props;
  return (
    <>
      <div className="row-item">
        <div className="row-text">
          <p>{`${nominee.Title} (${nominee.Year})`}</p>
        </div>

        <div className="row-buttons">
          <a
            href={`https://www.imdb.com/title/${nominee.imdbID}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ width: 60 }} src={IMDBLogo} alt="IMDB logo" />
          </a>
          &nbsp;
          <Button
            variant="contained"
            onClick={() => {
              setNominees(nominees.filter((nom) => nom !== nominee));
            }}
            className="row-buttons-end"
          >
            REMOVE
          </Button>
        </div>
      </div>
    </>
  );
};
