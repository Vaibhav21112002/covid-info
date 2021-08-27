import React from "react";

function Card(props) {
  let date = new Date(props.time);
  return (
    <div className="mx-2">
      <div className="card text-white bg-success mb-3">
        <div className="card-header">
          {props.provinceState ? props.provinceState : props.country}
        </div>
        <div className="card-body">
          <h5 className="card-title">
            Confirmed :&emsp; {props.confirmed ? props.confirmed : "NA"}
          </h5>
          <p className="card-text"></p>
          <h5 className="card-title">
            Deaths &emsp;&emsp;&emsp;
            {props.deaths ? props.deaths : "NA"}
          </h5>
          <h5 className="card-title">
            Recovered &emsp; {props.recovered ? props.recovered : "NA"}
          </h5>
        </div>
        <div class="card-footer">
          <small>
            Last updated: <br /> {date.getDate()}-{date.getMonth()}-
            {date.getFullYear(0)}, {date.getHours()}:{date.getMinutes()}:
            {date.getSeconds()}
          </small>
        </div>
      </div>
    </div>
  );
}

export default Card;
