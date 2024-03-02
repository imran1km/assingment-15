let gustArr : string[] = ["imran", "kamran","Adil","Adnan"];
let canNotAtten: string = "imran";
//console.log (canNotAtten + " " " cant attaned the dinner");
let NewGustArr : string = "Adil";
gustArr[gustArr.indexOf (canNotAtten)] = NewGustArr;
//console.log(gustArr);
gustArr.map((items) =>
console.log(`dear ${items},  adnan you are invited for dinner`));
