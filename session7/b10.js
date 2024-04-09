function suy(obj) {
    var result = {};
    for (var key in obj) {
        if (obj[key]) {
            result[key] = obj[key];
        }
    }
    return result;
}
var inputObj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: "",
    g: "a",
};
var outputObj = suy(inputObj);
console.log(outputObj);
