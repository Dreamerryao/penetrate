import { entryArray } from "@/constants/entry";
import CardLayout from "src/layouts/CardLayout";
import styles from "./index.module.less";
const Body = () => {
  return (
    <div className={styles.bodyContainer}>
      {entryArray.map((entry) => {
        return <CardLayout {...entry} key={entry.id}></CardLayout>;
      })}
    </div>
  );
};
export default Body;
