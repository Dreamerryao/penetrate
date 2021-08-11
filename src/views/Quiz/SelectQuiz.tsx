import { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import ProgressBar from "@/components/ProgressBar";
import { details, ID_LIST } from "@/constants/entry";
import styles from "./index.module.less";
import cn from "classnames";

import computeResult from "@/utils/computeResult";
interface SelectQuizProps {
  id: ID_LIST;
}
const SelectQuiz = ({ id }: SelectQuizProps) => {
  const quizDetails: Array<{
    title: string;
    options: string[];
  }> = useMemo(() => {
    return details[id].topics;
  }, [id]);

  const history = useHistory();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState<number[]>(
    Array(quizDetails.length).fill(0)
  );
  const [showResult, setShowResult] = useState(false);

  const [bg, setBackground] = useState<{
    angle: number;
    from: string;
    to: string;
  }>({
    angle: 0,
    from: "rgba(255,255,255,0.2)",
    to: "rgba(255,255,255,0.2)",
  });

  const randomColor = () =>
    setBackground({
      angle: Math.round(Math.random() * 360),
      from: `rgba(${Math.round((Math.random() * 255 + 510) / 3)},${Math.round(
        (Math.random() * 255 + 510) / 3
      )},${Math.round((Math.random() * 255 + 510) / 3)},0.1)`,
      to: `rgba(${Math.round((Math.random() * 255 + 510) / 3)},${Math.round(
        (Math.random() * 255 + 510) / 3
      )},${Math.round((Math.random() * 255 + 510) / 3)},0.1)`,
    });
  useEffect(() => {
    randomColor();
  }, []);

  const handleChoose = (cur: number, option: number) => {
    setCurrentScore((x) => {
      const a = [...x];
      a[cur] = Math.pow(100, option);
      return a;
    });
    if (cur !== quizDetails.length - 1 && !showResult) {
      // window.setTimeout(() => {
      setCurrentIndex((cur) => cur + 1);
      randomColor();
      // }, 400);
    } else if (showResult) {
      //nothing
    } else {
      window.setTimeout(() => {
        setShowResult(true);
        // randomColor();
      }, 400);
    }
  };

  const handleResult = () => {
    const rid = computeResult(id, currentScore);
    history.push(`/penetrate/result?id=${id}&res=${rid}`);
  };

  return (
    <div className={styles.relativeContainer}>
      <ProgressBar current={currentIndex} total={quizDetails.length} />
      <div
        className={styles.quizCard}
        style={{
          background: `linear-gradient(${bg.angle}deg, ${bg.from}, ${bg.to})`,
        }}
      >
        <span className={styles.title}>
          {quizDetails?.[currentIndex].title ?? ""}
        </span>
        {quizDetails[currentIndex].options.map((option, i) => {
          return (
            <div
              onClick={() => handleChoose(currentIndex, i)}
              key={i}
              className={cn(styles.card, {
                [styles.active]:
                  currentScore[currentIndex] === Math.pow(100, i),
              })}
            >
              {option}
            </div>
          );
        })}
      </div>
      <div className={styles.bottomArea}>
        {currentIndex !== 0 && (
          <button
            className={styles.button}
            onClick={() => {
              setCurrentIndex((x) => x - 1);
              randomColor();
            }}
          >
            上一题
          </button>
        )}
        {showResult && currentIndex !== quizDetails.length - 1 && (
          <button
            className={styles.button}
            onClick={() => {
              setCurrentIndex((x) => x + 1);
              randomColor();
            }}
          >
            下一题
          </button>
        )}
        {showResult && (
          <button className={styles.submit} onClick={handleResult}>
            查看结果
          </button>
        )}
      </div>
    </div>
  );
};
export default SelectQuiz;
