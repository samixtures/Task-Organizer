let checkBoxes = document.querySelectorAll("input");
let listLength = checkBoxes.length;
let button1 = document.getElementById("button1");
let input = document.getElementById("userInput");
let div = document.getElementById("divertido!");
for (let i = 1; i < listLength; i++) {
  checkBoxes[i].addEventListener("click", function () {
    document.querySelectorAll("span")[i - 1].classList.toggle("done");
  });
}

button1.addEventListener("click", function () {
  console.log("The button was clicked!");
  let checker = document.createElement("input");
  checker.setAttribute("type", "checkbox")
  let span = document.createElement("span");
  span.appendChild(document.createTextNode(input.value));
  let br = document.createElement("br");


  div.appendChild(checker);
  div.appendChild(span);
  div.appendChild(br);
  input.value="";
});

//Another, maybe better, way of doing the for loop for crossing out the text
// const checkBoxLabels = document.querySelectorAll("span");
// for (let i = 0; i < checkBoxes.length; i++) {
//   const checkBox = checkBoxes[i];
//   const label = checkBoxLabels[i];
//   checkBox.addEventListener("click", () => {
//     label.classList.toggle("done");
//   });
// }
