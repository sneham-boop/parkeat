import BackgroundVideo from "../BackgroundVideo";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./Main.module.scss";

export default function Main({ children }) {
  return (
    <>
      <div className={styles.main}>
        <Header />
        {children}
        <Footer />
        <BackgroundVideo />
      </div>
    </>
  );
}
