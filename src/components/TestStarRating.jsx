import { useState } from "react";
import StarRating from "./StarRating";

function TestStarRating() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>this movie was rated {movieRating} star</p>
    </div>
  );
}

export default TestStarRating;
