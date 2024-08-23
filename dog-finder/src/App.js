import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import RouteList from "./RouteList";
import NavBar from "./NavBar";

/**
 * App
 *
 * state:
 * - dogs: array of dog objects [{name...}]
 * - isLoading: bool
 *
 * props: none
 *
 * App -> RouteList
 *
 */

function App() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadDogs = async () => {
      try {
        const response = await axios.get("http://localhost:5001/dogs");
        setDogs(response.data);
      } catch (error) {
        console.error("Error fetching dogs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadDogs();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <BrowserRouter>
        <NavBar dogs={dogs} />
        <div className="container">
          <RouteList dogs={dogs} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

