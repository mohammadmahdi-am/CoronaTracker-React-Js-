import React from 'react'
import { Card } from "react-bootstrap";
export default function Recovered(props) {
    return (
        <Card
        bg="success"
        key={0}
        text={"light"}
        style={{ width: "18rem" }}
        className="mb-2 h-100 w-100"
      >
        <Card.Header>Recovered ( {props.country} )</Card.Header>
        <Card.Body>
          <Card.Title> Total Recovered In The World </Card.Title>
          <Card.Text>
                      Total Recovered : {props.recoveredValue}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
