import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

/**
 * DogList
 *
 * state: none
 *
 * props:
 * - dogs: [{name, src}]
 *
 * rendered at /dogs
 *
 */

function DogList({ dogs }) {
  return (
    <div className="DogList">
      <div className="row mt-4">
        <div className="col text-center">
          <h2>HELLO. WE HAVE DOGS. CLICK ON THEM FOR MORE INFO.</h2>
        </div>
      </div>
      <div className="row">
        {dogs.map(({ name, src }) => (
          <div className="col-3 text-center" key={name}>
            <img src={`/${src}.jpg`} alt={name} className="img-fluid" />
            <h3 className="mt-3">
              <Link to={`/dogs/${name.toLowerCase()}`}>{name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;

