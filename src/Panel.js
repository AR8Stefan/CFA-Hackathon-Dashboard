import React, { Component } from 'react';
import { Button } from 'react-bootstrap';



const title = (
  <h3>Panel title</h3>
);

const panelsInstance = (
  <div>
    <Panel header="Panel heading without title">
      Panel content
    </Panel>
    <Panel header={title}>
      Panel content
    </Panel>
  </div>
);


export default Panel;
