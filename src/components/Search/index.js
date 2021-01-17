import "../../App.css";
import { DatePicker } from "@material-ui/pickers";
import ClearIcon from "@material-ui/icons/Clear";
import SectionHeader from "../SectionHeader";
import React from "react";
import { TextField, Button, IconButton } from "@material-ui/core";
import { Row, Card, Container } from "react-bootstrap";
import clsx from "clsx";

//Search section with fields
export default function Search(props) {
  const { searchOMDB, term, setTerm, year, setYear } = props;

  return (
    <>
      <SectionHeader text="Search for a movie:" />
      <Card className={clsx("search", "box")}>
        <Container style={{ padding: 5 }}>
          <Row className="flexrow">
            <div className="col-sm-12 col-md-6">
              <label>Movie Title*</label>
              <div className="flexrow">
                <TextField
                  inputProps={{ style: { fontSize: 18 } }}
                  fullWidth
                  value={term}
                  onKeyDown={(e) => {
                    e.keyCode === 13 &&
                      searchOMDB({ searchTerm: term, year, pageNumber: 1 });
                  }}
                  onChange={(e) => {
                    setTerm(e.target.value);
                  }}
                />
                <IconButton
                  edge="end"
                  size="small"
                  disabled={term === ""}
                  onClick={() => setTerm("")}
                >
                  <ClearIcon />
                </IconButton>
              </div>
            </div>
            <div className="col-sm-8 col-md-4">
              <label>Year Released</label>
              <div className="flexrow">
                <DatePicker
                  inputProps={{ style: { fontSize: 18 } }}
                  variant="inline"
                  openTo="year"
                  views={["year"]}
                  style={{ flexGrow: 1 }}
                  value={year}
                  onChange={setYear}
                />
                <IconButton
                  edge="end"
                  size="small"
                  disabled={!year}
                  onClick={() => setYear(null)}
                >
                  <ClearIcon />
                </IconButton>
              </div>
            </div>
            <div className={clsx("col-sm-4 col-md-2", "search-btn")}>
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
