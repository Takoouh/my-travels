import React from "react";

const Travel = ({destination, country, photo, distance}) =>(
  <figure>
    <img src={photo} alt={country} />
    <figcaption>
      <p>I've Been to {destination} in {country}, it's {distance} from my home</p>
    </figcaption>
  </figure>
);

export default Travel;