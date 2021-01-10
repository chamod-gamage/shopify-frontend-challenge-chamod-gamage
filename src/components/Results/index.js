import React from "react";
import { ResultItem } from "./ResultItem";
import SectionHeader from "../SectionHeader";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import clsx from "clsx";
import "../../App.css";
export default function Results(props) {
  const { results, nominees, setNominees } = props;

  return (
    <>
      <SectionHeader text="Results" />
      <Card className={clsx("column", "box")}>
        <Container>
          {results.map((result) => (
            <ResultItem
              result={result}
              nominees={nominees}
              setNominees={setNominees}
            />
          ))}
        </Container>
      </Card>
    </>
  );
}
