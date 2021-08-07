import TransitionImg from "../../components/TransitionImg";
import classNames from "classnames";
import "./index.scss";
import { useHistory } from "react-router-dom";
import { useCallback } from "react";

export interface CardLayoutProps {
  imgSrc: string;
  title: string;
  desc: string;
  id: string;
  enableReveal?: boolean;
}

// 首页 Card
const CardLayout = ({
  imgSrc,
  title,
  desc,
  id,
  enableReveal = true,
}: CardLayoutProps) => {
  const history = useHistory();
  const handleClick = useCallback(() => {
    history.replace(`/quiz?id=${id}&name=${title}`);
  }, [history, id, title]);
  return (
    <div
      className={classNames("item-container", {
        "reveal-from-bottom": enableReveal,
      })}
      onClick={handleClick}
    >
      <div className="card">
        <div className="imgBx">
          <TransitionImg src={imgSrc} className="img"></TransitionImg>
        </div>
        <div className="content">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default CardLayout;
