import React from "react"
import Travel from "./Travel"

const travels =[
  {
    destination:"Tokyo",
    country:"Japan",
    photo:"https://img.meso-berlin.de/imagestore/auto_700_500/reisen-spezialist/asien/japan/japan-itsukushima-the-great-torii.jpg",
    distance:"9 706 km"
  },
  {
    destination:"Tokyo",
    country:"Japan1",
    photo:"https://img.meso-berlin.de/imagestore/auto_700_500/reisen-spezialist/asien/japan/japan-itsukushima-the-great-torii.jpg",
    distance:"9 706 km"
  },{
    destination:"Tokyo",
    country:"Japan2",
    photo:"https://img.meso-berlin.de/imagestore/auto_700_500/reisen-spezialist/asien/japan/japan-itsukushima-the-great-torii.jpg",
    distance:"9 706 km"
  },{
    destination:"Tokyo",
    country:"Japan3",
    photo:"https://img.meso-berlin.de/imagestore/auto_700_500/reisen-spezialist/asien/japan/japan-itsukushima-the-great-torii.jpg",
    distance:"9 706 km"
  },{
    destination:"Tokyo",
    country:"Japan4",
    photo:"https://img.meso-berlin.de/imagestore/auto_700_500/reisen-spezialist/asien/japan/japan-itsukushima-the-great-torii.jpg",
    distance:"9 706 km"
  }
];

travel => (
  <Travel destination ={travel.destination} country={travel.country}  photo = {travel.photo} distance = {travel.distance} />
)

const Travels = () => (
  <div>
    {travels.map(travel => <Travel {...travel} />)}
  </div>
);

export default Travels;