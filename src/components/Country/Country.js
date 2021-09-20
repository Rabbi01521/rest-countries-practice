import React from "react";
import "./Country.css";

const Country = (props) => {
  console.log(props.country);
  const { name, capital, population, flag, region, timezones } = props.country;

  return (
    <div className="country">
      <h3>Name: {name}</h3>
      <p>
        <b>Capital:</b> {capital}
      </p>
      <img src={flag} alt="" />
      <p>
        <b>Population:</b> {population}
      </p>
      <p>
        <b>Time: </b>
        {timezones[0]}
      </p>
      <p>
        <b>Region: </b>
        {region}
      </p>
    </div>
  );
};

export default Country;
