const obj = {
  arr: [
    // item1
    {
      level: [10, 50, 100],
    },

    // item2
    {
      level: [20, 40, 60],
      students: [
        {
          name: "jemala",
          surname: "barkalaia",
          score: [8, 8, 10],
        },
        {
          name: "jumbera",
          surname: "lamazi",
          score: [10, 7, 9],
        },
      ],
    },
  ],
};
const [
  { level: [lvl1_1, lvl1_2, lvl1_3] },
  {
    level: [lvl2_1, lvl2_2, lvl2_3],
    students: [
      {
        name: name1,
        surname: surname1,
        score: [score1_1, score1_2, score1_3],
      },
      {
        name: name2,
        surname: surname2,
        score: [score2_1, score2_2, score2_3],
      },
    ],
  },
] = obj.arr;
console.log("Item1 Levels:", lvl1_1, lvl1_2, lvl1_3);
console.log("Item2 Levels:", lvl2_1, lvl2_2, lvl2_3);
console.log("Student 1:", name1, surname1, score1_1, score1_2, score1_3);
console.log("Student 2:", name2, surname2, score2_1, score2_2, score2_3);
