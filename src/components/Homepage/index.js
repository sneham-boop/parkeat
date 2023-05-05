import styles from "./Homepage.module.scss";
import { Roboto } from "next/font/google";
// import { useState } from "react";
// import useCurrentLocation from "@component/src/hooks/useCurrentLocation";

const roboto = Roboto({ weight: ["100"], subsets: ["latin"] });

export default function Homepage() {
  // const user = { firstname: "Sneha", lastname: "Mahajan" };
  // const { location } = useCurrentLocation();
  // const [currentLocation, setCurrentLocation] = useState(location);
  return (
    <section className={styles.home}>
      {/* {user ? (
        <h3>Welcome, {user.firstname}!</h3>
      ) : ( */}
      <div className={styles.intro}>
        <h3>this is Park&Eat.</h3>
        <p className={roboto.className}>
          Head over to the places page to see popular restuarants near you and
          easily find a safe place to park your car.
        </p>
      </div>
      {/* )} */}
    </section>
  );
}
