import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StarRating from "./components/StarRating.jsx";
import TestStarRating from "./components/TestStarRating.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["terrible", "bad", "okay", "good", "amazing"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={3} />
    <TestStarRating /> */}
  </React.StrictMode>
);
