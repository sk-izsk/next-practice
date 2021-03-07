import headerStyles from "../styles/Header.module.css";
interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>iZsk</span> News
      </h1>
      <p className={headerStyles.description}>Keep upto date with dev news</p>
    </div>
  );
};

export default Header;
