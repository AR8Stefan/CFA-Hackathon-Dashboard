import React from 'react';

const MacList = (props) => {
  return (
    <ul>
       {props.burgers.map((burger, i) => <li key={i}>{burger.name}</li>)}
    </ul>
  )
};

export default MacList;
