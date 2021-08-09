import { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import { details, ID_LIST } from "../../constants/entry";
import "./index.scss";

import computeResult from "../../utils/computeResult";
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
      setCurrentIndex((cur) => cur + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleResult = () => {
    const rid = computeResult(id, currentScore);
    console.log("will push to result");
  };

  return (
    <div className="relative-container">
      <ProgressBar current={currentIndex} total={quizDetails.length} />
      <div className="quiz-card">
        {quizDetails[currentIndex].title}
        {quizDetails[currentIndex].options.map((option, i) => {
          return (
            <div onClick={() => handleChoose(currentIndex, i)} key={i}>
              {option}
            </div>
          );
        })}
      </div>
      <div className="quiz-bottom-area">
        {currentIndex !== 0 && (
          <button onClick={() => setCurrentIndex((x) => x - 1)}>上一题</button>
        )}
        {showResult && <button onClick={handleResult}>查看结果</button>}
      </div>
    </div>
  );
};
export default SelectQuiz;
