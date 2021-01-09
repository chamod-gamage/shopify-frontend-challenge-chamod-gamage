import React, { useState } from "react";
import { ResultItem } from "./ResultItem";
import { Grid } from "@material-ui/core";
import Card from "react-bootstrap/Card";
import clsx from "clsx";
import "../../App.css";
export default function Results(props) {
  const { results, nominees, setNominees } = props;

  return (
    <>
      <Card className={clsx("column", "box")}>
        {/* <CardContent> */}
        {results.map((result) => (
          <ResultItem
            result={result}
            nominees={nominees}
            setNominees={setNominees}
          />
        ))}
        {/* </CardContent> */}
      </Card>
    </>
  );
}
