import { entryArray } from "../../constants/entry";
import CardLayout from "src/layouts/CardLayout";
const Body = () => {
  return (
    <div className="body-container">
      {entryArray.map((entry) => {
        return <CardLayout {...entry} key={entry.id}></CardLayout>;
      })}
    </div>
  );
};
export default Body;
