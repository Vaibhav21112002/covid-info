import React, { useState } from "react";
import Card from "./Card";
import "./Cards.css";
import Loader from "../Spinner/Loader";

function Cards(props) {
  const [covidData, setCovidData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async (cnt) => {
    setLoading(true);
    setCovidData([]);
    let url = `https://covid19.mathdro.id/api/countries/${cnt}/confirmed`;
    let res = await fetch(url);
    let data = await res.json();
    setLoading(false);
    setCovidData(data);
  };
  const getTheme = (idx) => {
    if (idx % 4 === 0) {
      return "bg-success";
    } else if (idx % 4 === 1) {
      return "bg-warning";
    } else if (idx % 4 === 2) {
      return "bg-danger";
    } else {
      return "bg-info";
    }
  };
  return (
    <div className="my-5 p-0 m-0">
      <div className="container d-flex flex-column justify-content-center">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search By Country Name"
            aria-label="Search"
            value={props.country.toUpperCase()}
            onChange={(e) => {
              props.setCountry(e.target.value);
            }}
          />
          <button
            className="btn btn-dark"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              getData(props.country);
            }}
          >
            Search
          </button>
        </form>
        <div className="container my-4">
          <h1 className="text-center my-3">{props.country.toUpperCase()}</h1>
        </div>
      </div>
      {loading && <Loader />}
      {!loading && covidData.length === 0 && (
        <div className="container d-flex justify-content-center">
          <img
            className="images"
            src="https://source.unsplash.com/1600x1600/?covid"
            alt="Covid"
          />
        </div>
      )}
      <div className="cardBox">
        {covidData.map((element, index) => {
          return (
            <Card
              provinceState={element.provinceState}
              confirmed={element.confirmed}
              deaths={element.deaths}
              theme={getTheme(index)}
              country={props.country}
              time={element.lastUpdate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
