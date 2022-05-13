const clickBtn = document.querySelector("button");
const hexNumber = document.querySelector("#hex");
const rgbNumber = document.querySelector("#rgb");
const body = document.querySelector("body");
body.style.backgroundColor = "rgb(0,233,123)";

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

clickBtn.addEventListener("click", function () {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hex[randomNumber()];
  }
  body.style.backgroundColor = hexCode;
  hexNumber.textContent = hexCode;
  rgbNumber.textContent = body.style.backgroundColor;
});

function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}

// another idea
// clickBtn.addEventListener("click", function () {
//   const ree = ["a", 1, "b", 2, "c", 3, "d", 4, "e", 5, 6, "f", 7, 8, 9]
//   const rand1 = Math.trunc(Math.random() * ree.length)
//   const rand2 = Math.trunc(Math.random() * ree.length + 1)
//   const deleteNo = ree.splice(rand1, rand2)
//   const newArr = [...deleteNo, ...ree].slice(4, 10).join("")
//   const hexCode = `#${newArr}`;
//   // console.log(hexCode);
//   body.style.backgroundColor = hexCode
//   hexNumber.textContent = hexCode
//   rgbNumber.textContent = body.style.backgroundColor
// })
