import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
interface Props {}

const Nav: React.FC<Props> = () => {
  return (
    <div className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
