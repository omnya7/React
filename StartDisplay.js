import React from "react";

const StartDisplay = props => (
  <>
  {utils.range(1, props.cont).map(startId => (
      <div key={startId} className="star"/>
  ))}
  </>

);

export default StartDisplay;