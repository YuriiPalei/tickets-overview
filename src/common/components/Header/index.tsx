import logo from "assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { paths } from "common/urls";
import styles from "./styles.module.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.wrapper}>
      <img
        src={logo}
        alt="logo"
        className={styles.wrapper__logo}
        onClick={() => navigate(paths.HOME)}
      />
    </header>
  );
};

export default Header;
