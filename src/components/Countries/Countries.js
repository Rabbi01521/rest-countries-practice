import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  //   console.log(countries);
  return (
    <div>
      <h1>Hello From Countries</h1>
      <p>Countries Found: {countries.length}</p>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.numericCode}
            country={country}
            name={country.name}
            capital={country.capital}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
