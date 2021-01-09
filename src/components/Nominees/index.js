import React from "react";
import { NomineeItem } from "./NomineeItem";
import { Button } from "@material-ui/core";
import Card from "react-bootstrap/Card";
import clsx from "clsx";
import "../../App.css";
export default function Nominees(props) {
  const { nominees, setNominees } = props;
  const generateLink = () => {
    console.log(
      `${process.env.PUBLIC_URL}?${nominees.map(
        (nominee) => `nominees[]=${nominee.imdbID}&`
      )}`
    );
  };
  return (
    <>
      <Button onClick={generateLink}>Generate Link</Button>
      <Card className={clsx("column", "box")}>
        {/* <CardContent> */}
        {nominees.length ? (
          nominees.map((nominee) => (
            <NomineeItem
              nominee={nominee}
              nominees={nominees}
              setNominees={setNominees}
            />
          ))
        ) : (
          <div />
        )}
        {/* </CardContent> */}
      </Card>
    </>
  );
}
