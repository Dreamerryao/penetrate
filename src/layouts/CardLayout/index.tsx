import TransitionImg from "@/components/TransitionImg";
import classNames from "classnames";
import styles from "./index.module.less";
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
    history.replace(`/penetrate/quiz?id=${id}&name=${title}`);
  }, [history, id, title]);
  return (
    <div
      className={classNames(styles.container, {
        "reveal-from-bottom": enableReveal,
      })}
      onClick={handleClick}
    >
      <div className={styles.card}>
        <div className={styles.imgBx}>
          <TransitionImg src={imgSrc} className={styles.img}></TransitionImg>
        </div>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default CardLayout;
