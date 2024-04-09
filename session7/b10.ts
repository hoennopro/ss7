function suy(obj: { [key: string]: any }): {
  [key: string]: any;
} {
  const result: { [key: string]: any } = {};
  for (let key in obj) {
    if (obj[key]) {
      result[key] = obj[key];
    }
  }
  return result;
}

let inputObj = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: 1,
  f: "",
  g: "a",
};

let outputObj = suy(inputObj);
console.log(outputObj);
