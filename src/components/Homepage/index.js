export default function Homepage() {
  const user = { firstname: "Sneha", lastname: "Mahajan" };
  return (
    <section className="home">
      {user ? (
        <h3>Welcome, {user.firstname}!</h3>
      ) : (
        <div className="intro">
          <h3>Welcome to Park&EAT.</h3>
          <p>Please log in to continue.</p>
        </div>
      )}
    </section>
  );
}
