import Button from "../Button";
import Logo from "./Logo";
import Link from "next/link";

export default function Header(props) {
  return (
    <nav className="nav">
      <Link href="/">
        <Logo />
      </Link>
      <div className="nav-right-group">
        <Link href="/">
          <Button btnText={"Home"} />
        </Link>
        <Link href="/places">
          <Button btnText={"Places"} />
        </Link>
        {/* <Button btnText={btnText} onClick={handleClick} /> */}
      </div>
    </nav>
  );
}
