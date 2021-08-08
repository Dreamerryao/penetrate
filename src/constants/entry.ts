import type { CardLayoutProps } from "../layouts/CardLayout";
import test from "../assets/test.jpg";

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

export { entryArray, ID_LIST };
