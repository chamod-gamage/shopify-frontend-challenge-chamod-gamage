import "../../App.css";
import { DatePicker } from "@material-ui/pickers";
import SectionHeader from "../SectionHeader";
import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Row, Card, Container } from "react-bootstrap";
import clsx from "clsx";

export default function Search(props) {
  const { searchOMDB, term, setTerm, year, setYear } = props;

  return (
    <>
      <SectionHeader text="Search for a movie:" />
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
              <label>Movie Title*</label>
              <TextField
                //   label="Movie Title"
                //   InputLabelProps={{
                //     style: { fontSize: 20, fontFamily: "Questrial" },
                //   }}
                inputProps={{ style: { fontSize: 18 } }}
                fullWidth
                value={term}
                onChange={(e) => {
                  setTerm(e.target.value);
                }}
              />
            </div>
            <div className="col-sm-8 col-md-4">
              <label>Year Released</label>

              <DatePicker
                //   label="Year Released"
                //   InputLabelProps={{
                //     style: { fontSize: 20, fontFamily: "Questrial" },
                //   }}
                inputProps={{ style: { fontSize: 18 } }}
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
                  onClick={() =>
                    searchOMDB({ searchTerm: term, year, pageNumber: 1 })
                  }
                >
                  Search
                </Button>
              </div>
            </div>
          </Row>
        </Container>
      </Card>
    </>
  );
}
