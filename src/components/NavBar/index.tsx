import { ReactComponent as BackIcon } from "../../assets/back.svg";
import "./index.scss";

interface NavBarProps {
  handleClick?: () => void;
  name: string;
}

const NavBar = ({ handleClick, name }: NavBarProps) => {
  return (
    <div className="nav-bar-container">
      <BackIcon className="icon" onClick={handleClick} />
      <span>{name}</span>
    </div>
  );
};
export default NavBar;
