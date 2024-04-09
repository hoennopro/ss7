var variableAny = 10;
var variableUnknown = 20;
// any: không cần kiểm tra kiểu dữ liệu hoặc ép kiểu
var resultAny = variableAny + 5;
console.log("Biến any:", resultAny);
// unknown: cần kiểm tra và xác nhận kiểu dữ liệu trước khi sử dụng
if (typeof variableUnknown === "number") {
    var resultUnknown = variableUnknown + 5;
    console.log("Biến unknown:", resultUnknown);
}
else {
    console.log("Biến unknown không phải là số.");
}
