import _ from "lodash";
import { firstPre, firstSuff, housePre, houseSuff } from "./names";

export const optionsReducer = (initialOp, prevOp) => {
  switch (prevOp.trim()) {
    case "random":
      return "female";
    case "female":
      return "male";
    case "male":
      return "random";
    default:
      return initialOp;
  }
};

export const genName = (
  setFirstPre,
  setFirstSuff,
  setHousePre,
  setHouseSuff
) => {
  setFirstPre(firstPre[_.random(0, firstPre.length-1)]);
  setFirstSuff(firstSuff[_.random(0, firstSuff.length-1)]);
  setHousePre(housePre[_.random(0, housePre.length-1)]);
  setHouseSuff(houseSuff[_.random(0, houseSuff.length-1)]);
};
