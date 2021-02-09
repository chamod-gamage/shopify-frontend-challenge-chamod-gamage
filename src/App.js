import "./App.css";
import Interface from "./Interface";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="App">
        <header className="App-header">
          <Container>
            <h1 className="gold">
              <i>The Nominator</i>
            </h1>
            <Interface />
            <Footer />
          </Container>
        </header>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
