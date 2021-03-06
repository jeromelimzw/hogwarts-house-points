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
    id: 0,
    value: randGen(),
    imgUrl: "/img/Gryffindor.png",
    color: "light-red",
    house: "Gryffindor",
    key: b()
  },
  {
    id: 1,
    value: randGen(),
    imgUrl: "/img/Slytherin.png",
    color: "light-green",
    house: "Slytherin",
    key: b()
  },
  {
    id: 2,
    value: randGen(),
    imgUrl: "/img/Hufflepuff.png",
    color: "light-yellow",
    house: "Hufflepuff",
    key: b()
  },
  {
    id: 3,
    value: randGen(),
    imgUrl: "/img/Ravenclaw.png",
    color: "light-blue",
    house: "Ravenclaw",
    key: b()
  }
];

export default counters;
