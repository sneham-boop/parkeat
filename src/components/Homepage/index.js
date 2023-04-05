import styles from './Homepage.module.scss'

export default function Homepage() {
  // const user = { firstname: "Sneha", lastname: "Mahajan" };
  return (
    <section className={styles.home}>
      {/* {user ? (
        <h3>Welcome, {user.firstname}!</h3>
      ) : ( */}
        <div className={styles.intro}>
          <h3>Welcome to Park&EAT.</h3>
          <p>Please log in to continue.</p>
        </div>
      {/* )} */}
    </section>
  );
}
