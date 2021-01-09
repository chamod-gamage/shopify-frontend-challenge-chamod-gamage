import React, { useState } from "react";
import IMDBLogo from "../../images/IMDB_Logo.svg";
import { Button } from "@material-ui/core";
export const NomineeItem = (props) => {
  const { nominee, nominees, setNominees } = props;
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
          {`${nominee.Title} (${nominee.Year})`}
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
            href={`https://www.imdb.com/title/${nominee.imdbID}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ width: 40 }} src={IMDBLogo} alt="IMDB logo" />
          </a>
          &nbsp;
          <Button
            variant="contained"
            onClick={() => {
              setNominees(nominees.filter((nom) => nom != nominee));
            }}
            style={{ height: 30, marginTop: 5, width: 120, alignSelf: "right" }}
          >
            REMOVE
          </Button>
        </div>
      </div>
    </>
  );
};
