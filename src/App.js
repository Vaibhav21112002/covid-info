import React, { useState } from "react";
import Cards from "./components/Covid/Cards";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dictionary from "./components/Dictionary/Dictionary";

function App() {
  const [country, setCountry] = useState("");
  const [word, setWord] = useState("");
  return (
    <div>
      <Router>
        <Navbar
          country={country}
          setCountry={setCountry}
          title="Covid Tracker"
        />
        <Switch>
          <Route key="covid" exact path="/">
            <Cards country={country} setCountry={setCountry} />
          </Route>
          <Route key="dict" exact path="/dictionary">
            <Dictionary word={word} setWord={setWord} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
