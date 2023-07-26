import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import StarRating from "./StarRating.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* {
      <StarRating
        maxRating={5}
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        // onSetRating={setMovieRating}
      />
    } */}
    {/* <StarRating size="15" color="red" defaultRating={3} /> */}
  </React.StrictMode>
);
