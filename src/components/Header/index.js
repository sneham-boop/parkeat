import Button from "../Button";
import Logo from "./Logo";
import Link from "next/link";
import styles from "./Header.module.scss";
import { Roboto } from "next/font/google";
import { useState } from "react";
import useCurrentLocation from "@component/src/hooks/useCurrentLocation";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Header(props) {
  const { location } = useCurrentLocation();
  const [currentLocation, setCurrentLocation] = useState(location);

  // const handleClick = async () => {
  //   console.log("this is currentpoe",currentLocation)
  //   fetch("/places", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: JSON.stringify(currentLocation),
  //   });
  // };

  return (
    <nav className={`${styles.nav} ${roboto.className}`}>
      <Link href="/">
        <Logo />
      </Link>
      <div className={styles["nav-right-group"]}>
        <Link href="/">Home</Link>
        <Link href="#">|</Link>
        <Link href="/places">
          Places
        </Link>
        <Link href="#">|</Link>
        <Link href="https://github.com/sneham-boop/parkeat" target="_blank">
          Github
        </Link>
        {/* <Button btnText={btnText} onClick={handleClick} /> */}
      </div>
    </nav>
  );
}
