let sian = "beautiful";
console.log(sian.length);
console.log(sian[8]);
console.log(sian[7]);
console.log(sian[6]);
console.log(sian[5]);
const food = "I was feeling hungry today";
const newstring = "eat";
console.log(food[4]);
const result = `I was ${newstring} feeling hungry today`;
console.log(result);
"the"
"brown"
const story = "The quick brown fox jumps over the lazy dog";
console.log(story.match(/the/g).length);
console.log(story.match(/brown/g).length);
const string5 = "We are now going to school";
console.log(string5.includes("now"));
console.log(string5.includes("sitting"));
//convert
//1. to Uppercase
let s
= "wonderful"
console.log(v.toUpperCase())
//2 . to lowercase
let v = "amazing"
let t = "BEneath"
console.log(v.toLocaleLowerCase())
console.log(t.toLocaleLowerCase())
//3.TITleCASE
let d="A beautiful wedding";
    d=d.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
       console.log(d);