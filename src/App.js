import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [flag, setFlag] = useState("");
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/pratikbutani/20ded7151103bb30737e2ab1b336eb02/raw/be1391e25487ded4179b5f1c8eedb81b01226216/country-flag.json"
    )
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (event) => {
    setFlag(event.target.value);
  };
  return (
    <div className="App">
      <select onChange={handleChange}>
        <option> Select Country</option>
        {countries.map((country) => (
          <option value={country.flag}>{country.country}</option>
        ))}
      </select>
      <div>
        <img src={flag} alt="flag" />
      </div>
    </div>
  );
}

export default App;
