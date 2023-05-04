import React from "react";
import styles from "./ShowPlaces.module.scss";
// import Image from "next/image";
import Button from "../Button";

export default function Place({ place, image }) {
  return (
    <section className={styles.place}>
      {image && <img
        className={styles.placeImage} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photo_reference=${image.photo_reference}&key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`}
      ></img>}
      <div>
        <h4>
          {place.num}. {place.name}
        </h4>
        <p>Address: {place.vicinity}</p>
        <p>Rating: {place.rating}</p>
        {/* <Button btnText="Save"/>
        <Button btnText="Remove"/> */}
      </div>
    </section>
  );
}
