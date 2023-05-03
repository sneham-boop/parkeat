import React from "react";
import styles from "./ShowPlaces.module.scss";
// import Image from "next/image";
import Button from "../Button";

export default function Place({ place, image }) {
  return (
    <section className={styles.place}>
      {/* <Image
        alt="The places that were found"
        // className={styles["place-image"]}
        width={200}
        height={200}
        src="https://images.pexels.com/photos/4062272/pexels-photo-4062272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        priority
      /> */}
      <div>
        <h4>
          {place.num}. {place.name}
        </h4>
        <p>Address: {place.vicinity}</p>
        <p>Rating: {place.rating}</p>
        <Button btnText="Save"/>
        <Button btnText="Remove"/>
      </div>
    </section>
  );
}
