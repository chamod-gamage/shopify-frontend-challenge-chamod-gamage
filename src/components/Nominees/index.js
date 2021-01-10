import React from "react";
import { NomineeItem } from "./NomineeItem";
import LinkDialog from "./LinkDialog";
import { Button } from "@material-ui/core";
import Card from "react-bootstrap/Card";
import clsx from "clsx";
import "../../App.css";
export default function Nominees(props) {
  const { nominees, setNominees } = props;

  return (
    <>
      <Card className={clsx("column", "box")}>
        {nominees.length ? (
          <>
            {nominees.map((nominee) => (
              <NomineeItem
                nominee={nominee}
                nominees={nominees}
                setNominees={setNominees}
              />
            ))}
            <LinkDialog nominees={nominees} />
          </>
        ) : (
          <div />
        )}
      </Card>
    </>
  );
}
