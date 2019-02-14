import { green } from "ansi-colors";

const randGen = () => {
  return Math.round(Math.random() * 10);
};

function b(a) {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
}

const counters = [
  {
    id: b(),
    value: randGen(),
    imgUrl: "/img/Gryffindor.png",
    color: "red"
  },
  {
    id: b(),
    value: randGen(),
    imgUrl: "/img/Slytherin.png",
    color: "green"
  },
  {
    id: b(),
    value: randGen(),
    imgUrl: "/img/Hufflepuff.png",
    color: "yellow"
  },
  {
    id: b(),
    value: randGen(),
    imgUrl: "/img/Ravenclaw.png",
    color: "blue"
  }
];

export default counters;
