import React from "react";
import styles from "./ShowPlaces.module.scss"

export default function Place ({ place, image }) {
  return (
    <section className={styles.place}>
      {/* {image && <img alt="The places that were found" className={styles["place-image"]} src={image.html_attributions[0].href}/>} */}
      <h4>{place.num}. {place.name}</h4>
      <p>Address: {place.vicinity}</p>
      <p>Rating: {place.rating}</p>
    </section>
  );
};

