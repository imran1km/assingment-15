var gustArr = ["imran", "kamran", "Adil", "Adnan"];
var canNotAtten = "imran";
//console.log (canNotAtten + " " " cant attaned the dinner");
var NewGustArr = "Adil";
gustArr[gustArr.indexOf(canNotAtten)] = NewGustArr;
//console.log(gustArr);
gustArr.map(function (items) {
    return console.log("dear ".concat(items, ",  adnan you are invited for dinner"));
});
