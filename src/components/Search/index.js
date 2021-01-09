import "../../App.css";
import { DatePicker } from "@material-ui/pickers";

import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Row, Card, Container } from "react-bootstrap";
import clsx from "clsx";

export default function Search(props) {
  const { searchOMDB } = props;
  const [term, setTerm] = useState("");
  const [year, setYear] = useState(null);

  return (
    <Card className={clsx("search", "box")}>
      <Container style={{ padding: 5 }}>
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div className="col-sm-12 col-md-6">
            <label>Movie Title</label>
            <TextField
              fullWidth
              value={term}
              onChange={(e) => {
                setTerm(e.target.value);
              }}
            />
          </div>
          <div className="col-sm-8 col-md-4">
            <label>Year Released</label>
            {/* <TextField
              variant="outlined"
              type="number"
              
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            /> */}
            <DatePicker
              variant="inline"
              openTo="year"
              views={["year"]}
              style={{ width: "100%" }}
              //   label="Year and Month"
              //   helperText="Start from year selection"
              value={year}
              onChange={setYear}
            />
          </div>
          <div
            className="col-sm-4 col-md-2"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              float: "left",
              alignItems: "baseline",
            }}
          >
            <div style={{ padding: 10, width: "100%" }}>
              <Button
                variant="contained"
                disabled={term.length === 0}
                style={{ width: "100%" }}
                onClick={() => searchOMDB({ searchTerm: term, year })}
              >
                Search
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </Card>
  );
}
