import { ReactComponent as BackIcon } from "../../assets/back.svg";
import styles from "./index.module.less";

interface NavBarProps {
  handleClick?: () => void;
  name: string;
}

const NavBar = ({ handleClick, name }: NavBarProps) => {
  return (
    <div className={styles.navBarContainer}>
      <BackIcon className={styles.icon} onClick={handleClick} />
      <span>{name}</span>
    </div>
  );
};
export default NavBar;
