import styles from "./Header.module.scss";

function Logo() {
  // console.log(styles);
  return (
    <div className={styles.logo}>
      <img src="/logo2.svg"></img>
      {/* <h1>PARK & EAT</h1> */}
    </div>
  );
}

export default Logo;
