import Button from "../Button";

export default function Footer() {
  const btnText = "GO UP";
  const handleScroll = () => {
    const element = document.getElementsByClassName("nav");
    if (element) {
      element[0].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <Button btnText={btnText} onClick={() => handleScroll()} />
    </footer>
  );
}
