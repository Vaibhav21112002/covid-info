import React, { useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

function App() {
  const [country, setCountry] = useState("");
  return (
    <div>
      <Navbar country={country} setCountry={setCountry} title="Covid Tracker" />
      <Cards country={country} setCountry={setCountry} />
    </div>
  );
}

export default App;
