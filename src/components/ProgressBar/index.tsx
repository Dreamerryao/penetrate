import styles from "./index.module.less";

interface ProgressProps {
  current: number;
  total: number;
}

const ProgressBar = ({ current, total }: ProgressProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div
          className={styles.inner}
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>
      <div className={styles.display}>
        <span>{current + 1}</span>/<span className={styles.post}>{total}</span>
      </div>
    </div>
  );
};
export default ProgressBar;
