import React from 'react'
import { Card } from "react-bootstrap";
export default function Deaths(props) {
    return (
       
           <Card
              bg="danger"
              key={0}
              text={"light"}
              style={{ width: "18rem" }}
              className="mb-2 h-100 w-100"
            >
              <Card.Header>Deaths ( {props.country} )</Card.Header>
              <Card.Body>
                <Card.Title> Total Deaths In The World </Card.Title>
                <Card.Text>
                            Total Deaths : {props.deathsValue}
                </Card.Text>
              </Card.Body>
            </Card>
          
            
        
    )
}
