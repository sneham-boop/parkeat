import Button from "../Button";
import Logo from "./Logo";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header(props) {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Logo />
      </Link>
      <div className={styles["nav-right-group"]}>
        <Link href="/">Home</Link>
        <Link href="#">|</Link>
        <Link href="/places">Places</Link>
        <Link href="#">|</Link>
        <Link href="https://github.com/sneham-boop/parkeat" target="_blank">Github</Link>
        {/* <Button btnText={btnText} onClick={handleClick} /> */}
      </div>
    </nav>
  );
}
