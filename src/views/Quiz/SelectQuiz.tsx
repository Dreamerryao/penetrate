import { useMemo, useState } from "react";
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

  const handleChoose = (cur: number, option: number) => {
    setCurrentScore((x) => {
      const a = [...x];
      a[cur] = Math.pow(100, option);
      return a;
    });
    if (cur !== quizDetails.length - 1) {
      window.setTimeout(() => setCurrentIndex((cur) => cur + 1), 300);
    } else {
      window.setTimeout(() => setShowResult(true), 300);
    }
  };

  const handleResult = () => {
    const rid = computeResult(id, currentScore);
    history.push(`/result?id=${id}&res=${rid}`);
  };

  return (
    <div className={styles.relativeContainer}>
      <ProgressBar current={currentIndex} total={quizDetails.length} />
      <div className={styles.quizCard}>
        {quizDetails[currentIndex].title}
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
            onClick={() => setCurrentIndex((x) => x - 1)}
          >
            上一题
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
