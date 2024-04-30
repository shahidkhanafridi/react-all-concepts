import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setTheColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setTheColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setTheColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setTheColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setTheColor("green")}
      >Green</button>
    </>
  );
}

export default FavoriteColor;