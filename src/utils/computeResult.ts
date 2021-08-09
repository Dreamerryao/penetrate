import { ID_LIST } from "../constants/entry";

const computeResult = (id: ID_LIST, score: number[]) => {
  switch (id) {
    case "color_test":
      return colorTestComputeResult(id, score);
    default:
      return 0;
  }
};

const colorTestComputeResult = (id: ID_LIST, score: number[]) => {
  return 0;
};

export default computeResult;
