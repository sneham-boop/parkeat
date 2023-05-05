import styles from "./Footer.module.scss";
import Heart from "@mui/icons-material/FavoriteRounded";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["100"], subsets: ["latin"] });

export default function Footer() {
  const btnText = "GO UP";
  const handleScroll = () => {
    const element = document.getElementById("navbar");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={`${roboto.className} ${styles.footer}`}>
      <section className={styles["made-by"]}>
        <span>Made with </span>
        <span>
          <Heart sx={{ color: "#F9684F" }} />
        </span>
        <span>
          by{"  "}
          <a href="https://snehakmahajan.com/" target="_blank">
            Sneha Mahajan
          </a>
        </span>
      </section>
    </footer>
  );
}
