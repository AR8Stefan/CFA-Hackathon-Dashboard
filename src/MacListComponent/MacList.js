import React from 'react';
import './MacList.css';
import { Row, Col, Well, Image, Panel, Button } from 'react-bootstrap';

const MacList = (props) => {
  return (
      <Col md={4} mdPull={6} className="secretMenu">
      <h3><Image src="http://res.cloudinary.com/dihqhbf9i/image/upload/v1495551578/emoticon-1611647_640_wgxn5l.png" width="180  px" responsive /> Favorite MacDonald Secret Menu </h3>
          <Well>
           {props.burgers.map((burger, i) =>
           <Panel header={burger.name} bsStyle="danger">
           </Panel>
         )}
          <a href= "https://www.mcdonalds.com/us/en-us.html"><Button className="orderMac" bsStyle= "default">Order Now!</Button></a>

          </Well>
      </Col>
  )
};

export default MacList;
