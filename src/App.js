import React from "react";

const App = () => {

  return (
    <div className="app-container">

      <div className="temperature-display-container">
        <div className="temperature-display"> 10°C</div>
      </div>

      <div className="button-container">
        <button className="button">+</button>
        <button className="button">-</button>
      </div>
      
    </div>
  );
}

export default App;
