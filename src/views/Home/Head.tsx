import styles from "./index.module.less";
import TransitionImg from "../../components/TransitionImg";
import icon from "../../assets/icon.png";
import { useEffect } from "react";
import cn from "classnames";
const Head = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const parent = document.getElementById("mask");
      const show = document.querySelector("span[data-show]");
      const next =
        show?.nextElementSibling || parent?.querySelector("span:first-child");
      const up = document.querySelector("span[data-up]");
      if (up) {
        up?.removeAttribute("data-up");
      }
      show?.removeAttribute("data-show");
      show?.setAttribute("data-up", "");
      next?.setAttribute("data-show", "");
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div
      className={cn(
        styles.headContainer,
        styles.homeContainer,
        "reveal-from-top"
      )}
    >
      <TransitionImg src={icon} className={styles.headIcon}></TransitionImg>
      <div className={styles.wrapper}>
        <span>或许你对</span>
        <div id="mask" className={styles.mask}>
          <span data-up>颜色性格测试</span>
          <span data-show>花里胡哨的测试</span>
          <span>...</span>
        </div>
        <span>感兴趣</span>
      </div>
    </div>
  );
};
export default Head;
