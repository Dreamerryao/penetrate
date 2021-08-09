import "./index.scss";

interface ProgressProps {
  current: number;
  total: number;
}

const ProgressBar = ({ current, total }: ProgressProps) => {
  return (
    <div className="progress-container">
      <div className="linear-outer">
        <div
          className="linear-inner"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>
      <div className="display-process">
        <span>{current + 1}</span>/{total}
      </div>
    </div>
  );
};
export default ProgressBar;
