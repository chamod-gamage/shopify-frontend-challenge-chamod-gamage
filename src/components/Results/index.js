import React from "react";
import { ResultItem } from "./ResultItem";
import SectionHeader from "../SectionHeader";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import clsx from "clsx";
import "../../App.css";
export default function Results(props) {
  const {
    loading,
    results,
    nominees,
    setNominees,
    page,
    handlePageChange,
    total,
  } = props;

  return (
    <>
      <SectionHeader text="Results" />
      <Card className={clsx("column", "box")}>
        <Container>
          {loading ? (
            <p>Awaiting results...</p>
          ) : (
            <>
              {!results || results.length === 0 ? (
                <div style={{ textAlign: "center" }}>
                  <p>
                    Search for a movie title for results to show up here. Then
                    you can nominate your favourite movies!
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    justifyContent: "space-around",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <p
                    style={
                      page > 1 ? { cursor: "pointer" } : { color: "#fff9e8" }
                    }
                    onClick={() => handlePageChange(page - 1)}
                  >
                    {" "}
                    &lt;{" "}
                  </p>
                  <p>
                    &nbsp; Page {page} of {Math.ceil(total / 10)} &nbsp;
                  </p>
                  <p
                    style={
                      page < Math.ceil(total / 10)
                        ? { cursor: "pointer" }
                        : { color: "#fff9e8" }
                    }
                    onClick={() => handlePageChange(page + 1)}
                  >
                    &gt;
                  </p>
                </div>
              )}
              {results.map((result) => (
                <ResultItem
                  result={result}
                  nominees={nominees}
                  setNominees={setNominees}
                />
              ))}
            </>
          )}
        </Container>
      </Card>
    </>
  );
}
