const { indexBy } = require("underscore");

const stooges = [
  { name: "moe", age: 40 },
  { name: "larry", age: 50 },
  { name: "curly", age: 60 },
];

console.log(indexBy(stooges, "age"));

const indexBy2 = (list, funOrStr, context) => {
  const isFunc = typeof funOrStr === "function";
  const values = Object.values(list);
  return values.reduce(
    (prev, curr) => ({
      ...prev,
      [isFunc ? funOrStr(curr) : curr[funOrStr]]: curr,
    }),
    {}
  );
};

console.log(indexBy2(stooges, "age"));
