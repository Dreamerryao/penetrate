import BasicLayout from "src/layouts/BasicLayout";
import { details, ID_LIST } from "@/constants/entry";
import { useLocation } from "react-router-dom";
import SelectQuiz from "./SelectQuiz";
const Quiz = () => {
  // 路由参数: name 为 测试名称  id 为 唯一标识，以id来取题目
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  return (
    <BasicLayout>
      {details[(params.get("id") || "color_test") as ID_LIST].type ===
      "select" ? (
        <SelectQuiz id={(params.get("id") || "color_test") as ID_LIST} />
      ) : (
        <div>Todo</div>
      )}
    </BasicLayout>
  );
};
export default Quiz;
