import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <div className="front"></div>
      <div className="back"></div>
      <Router>
        <div>
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
          </Wrapper>
        </div>
      </Router>
    </div>
  );
}

export default App;
