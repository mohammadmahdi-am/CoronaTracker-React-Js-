import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Confirmed from "./components/Confirmed";
import React, { useState, useEffect } from "react";
import Recovered from "./components/Recovered";
import Deaths from "./components/Deaths";
import CountryPicker from "./components/CountryPicker";
import Graph from "./components/Graph";

function App() {
  const [confirmed, setConfirmed] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [countries, setCountries] = useState({});
  const [country, setCountry] = useState("Global");

  useEffect(() => {
    
  }, [country]);

  useEffect(() => {
   
    async function fetch_global() {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      let summary = await fetch(
        "https://api.covid19api.com/summary",
        requestOptions
      );
      let result_object = await summary.json();

      setConfirmed(result_object.Global.TotalConfirmed);
      setRecovered(result_object.Global.TotalRecovered);
      setDeaths(result_object.Global.TotalDeaths);
      setCountries(result_object.Countries);
    }

    fetch_global();
  }, []);
  return (
    <div className="App">
      <Container>
        <h1 className="text-center">coronavirus statistics</h1>
        <Row className="my-5 justify-content-center">
          <Col md={4} sm={12} className="mb-2"> 
            <Confirmed confirmedvalue={confirmed} country={country}/>
          </Col>

          <Col md={4} sm={12} className="mb-2">
            <Recovered recoveredValue={recovered} country={country}/>
          </Col>

          <Col md={4} sm={12} className="mb-2">
            <Deaths deathsValue={deaths} country={country}/>
          </Col>
        </Row>

        <Row>
          <CountryPicker countriesObj={countries} setCountry={setCountry} setRecovered={setRecovered} setDeaths={setDeaths} setConfirmed={setConfirmed} />
        </Row>

        <Row>
          <h1 className="text-center m-auto" >Top 5 Countries With Most Infections</h1>
          <Graph countries={countries}/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
