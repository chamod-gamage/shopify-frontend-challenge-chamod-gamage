import React, { useState } from "react";
import IMDBLogo from "../../images/IMDB_Logo.svg";
import { Button } from "@material-ui/core";
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "left",
          padding: 5,
        }}
      >
        <div style={{ display: "flex", justifyContent: "start", padding: 5 }}>
          {`${result.Title} (${result.Year})`}
          &nbsp;
        </div>
        <div
          style={{
            alignSelf: "right",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <a
            href={`https://www.imdb.com/title/${result.imdbID}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ width: 40 }} src={IMDBLogo} alt="IMDB logo" />
          </a>
          &nbsp;
          <Button
            variant="contained"
            disabled={
              (nominees && nominees.length && nominees.includes(result)) ||
              nominees.length > 4
            }
            onClick={handleNomination}
            style={{ height: 30, marginTop: 5, width: 120 }}
          >
            NOMINATE
          </Button>
        </div>
      </div>
    </>
  );
};
