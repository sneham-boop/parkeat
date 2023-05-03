import React, { useEffect, useRef } from "react";
import Place from "./Place";
import styles from "./ShowPlaces.module.scss";

const ShowPlaces = ({ places }) => {
  const displayPlaces = (places) => {
    return places.map((place, id) => {
      const { vicinity, rating, name, photos } = place;
      const placeInfo = { num: id + 1, vicinity, rating, name };
      let image = photos ? photos.slice(0)[0] : null;     
      return <Place key={id} place={placeInfo} image={image} />;
    });
  };

  return (
    <div className={styles["places-container"]}>
      <h3>We found these for you!</h3>
      {/* <div className={styles.places}>{places && displayPlaces(places)}</div> */}
    </div>
  );
};

export default ShowPlaces;

