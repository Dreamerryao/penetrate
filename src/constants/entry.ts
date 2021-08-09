import type { CardLayoutProps } from "../layouts/CardLayout";
import test from "../assets/test.jpg";
import colorTest from "./colorTest";

enum ID_LIST {
  COLOR_TEST = "color_test",
}

const entryArray: CardLayoutProps[] = [
  {
    id: "color_test",
    imgSrc: test,
    title: "颜色性格测试",
    desc: '相关材料来自"乐嘉性格色彩快速测试"',
  },
];

const details: Record<ID_LIST, any> = {
  color_test: colorTest,
};

export { entryArray, ID_LIST, details };
