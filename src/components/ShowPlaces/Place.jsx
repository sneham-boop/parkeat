import React from "react";
import styles from "./ShowPlaces.module.scss";

export default function Place({ place, image }) {
  return (
    <section className={styles.place}>
      <img
        alt="The places that were found"
        className={styles["place-image"]}
        src="https://images.pexels.com/photos/4062272/pexels-photo-4062272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <div>
        <h4>
          {place.num}. {place.name}
        </h4>
        <p>Address: {place.vicinity}</p>
        <p>Rating: {place.rating}</p>
      </div>
    </section>
  );
}
