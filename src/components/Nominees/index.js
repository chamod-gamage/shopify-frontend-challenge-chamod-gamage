import React from "react";
import { NomineeItem } from "./NomineeItem";
import SectionHeader from "../SectionHeader";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import clsx from "clsx";
import "../../App.css";

export default function Nominees(props) {
  const { nominees, setNominees } = props;

  return (
    <>
      <SectionHeader text={"Your Nominees"} />
      <Card className={clsx("column", "box")}>
        <Container>
          {nominees.length ? (
            <>
              {nominees.map((nominee) => (
                <NomineeItem
                  nominee={nominee}
                  nominees={nominees}
                  setNominees={setNominees}
                />
              ))}
              {nominees.length < 5 ? (
                <p>{5 - nominees.length} movies to go!</p>
              ) : (
                <p>Nomination List Complete!</p>
              )}
              {/* <LinkDialog nominees={nominees} /> */}
              {/* <div style={{ height: 10 }} /> */}
            </>
          ) : (
            <div>
              <p>
                Nominate your favourite movies from your search results. Select
                5 movies to complete your nomination list!
              </p>
            </div>
          )}
        </Container>
      </Card>
    </>
  );
}
