import logo from "./logo.svg";
import "./App.css";
import Interface from "./Interface";
import Container from "react-bootstrap/Container";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      {" "}
      <div className="App">
        <header className="App-header">
          <Container>
            <img src={logo} className="App-logo" alt="logo" />
            <div>Search for a movie!</div>
            <Interface />
            <p>
              Edit <code>src/App.js</code> and save to reload. Hi
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <div>d</div>
          </Container>
        </header>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
