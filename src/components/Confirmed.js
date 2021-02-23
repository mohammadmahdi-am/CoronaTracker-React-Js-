import React, { useEffect } from 'react'
import { Card } from "react-bootstrap";
export default function Confirmed(props) {

    return (
       
           <Card
              bg="primary"
              key={0}
              text={"light"}
              style={{ width: "18rem" }}
              className="mb-2 h-100 w-100"
            >
              <Card.Header>Confirmed( {props.country} )</Card.Header>
              <Card.Body>
                <Card.Title> Total Confirmed In The World </Card.Title>
                <Card.Text>
                            Total Confirmed : {props.confirmedvalue}
                </Card.Text>
              </Card.Body>
            </Card>
          
            
        
    )
}
