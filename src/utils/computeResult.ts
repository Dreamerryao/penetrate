import { ID_LIST } from "@/constants/entry";
import { sum } from "lodash";

const computeResult = (id: ID_LIST, score: number[]) => {
  console.log("score", score);
  switch (id) {
    case "color_test":
      return colorTestComputeResult(score);
    default:
      return 0;
  }
};

const colorTestComputeResult = (score: number[]) => {
  const sumScore = sum(score);
  //1 100 10000 1000000
  const chooseD = Math.floor(sumScore / 1000000);

  const chooseC = Math.floor((sumScore % 1000000) / 10000);

  const chooseB = Math.floor((sumScore % 10000) / 100);

  const chooseA = Math.floor(sumScore % 100);

  if (chooseA > 5 && chooseB <= 5 && chooseC <= 5 && chooseD <= 5) {
    return 0;
  } else if (chooseB > 5 && chooseA <= 5 && chooseC <= 5 && chooseD <= 5) {
    return 1;
  } else if (chooseC > 5 && chooseA <= 5 && chooseB <= 5 && chooseD <= 5) {
    return 2;
  } else if (chooseD > 5 && chooseA <= 5 && chooseB <= 5 && chooseC <= 5) {
    return 3;
  } else if (
    chooseA > 5 &&
    chooseC > 5 &&
    chooseA > chooseC &&
    chooseC > chooseB &&
    chooseC > chooseD
  ) {
    return 4;
  } else if (
    chooseA > 5 &&
    chooseD > 5 &&
    chooseA > chooseD &&
    chooseD > chooseB &&
    chooseD > chooseC
  ) {
    return 5;
  } else if (
    chooseB > 5 &&
    chooseC > 5 &&
    chooseB > chooseC &&
    chooseC > chooseA &&
    chooseC > chooseD
  ) {
    return 6;
  } else if (
    chooseB > 5 &&
    chooseD > 5 &&
    chooseB > chooseD &&
    chooseD > chooseA &&
    chooseD > chooseC
  ) {
    return 7;
  } else if (
    chooseC > 5 &&
    chooseA > 5 &&
    chooseC > chooseA &&
    chooseA > chooseD &&
    chooseA > chooseB
  ) {
    return 8;
  } else if (
    chooseC > 5 &&
    chooseB > 5 &&
    chooseC > chooseB &&
    chooseB > chooseD &&
    chooseB > chooseA
  ) {
    return 9;
  } else if (
    chooseD > 5 &&
    chooseA > 5 &&
    chooseD > chooseA &&
    chooseA > chooseB &&
    chooseA > chooseC
  ) {
    return 10;
  } else if (
    chooseD > 5 &&
    chooseB > 5 &&
    chooseD > chooseB &&
    chooseB > chooseA &&
    chooseB > chooseC
  ) {
    return 11;
  }

  return Math.round(Math.random() * 11);
};

export default computeResult;
