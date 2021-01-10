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
              {/* <LinkDialog nominees={nominees} /> */}
              {/* <div style={{ height: 10 }} /> */}
            </>
          ) : (
            <div />
          )}
        </Container>
      </Card>
    </>
  );
}
