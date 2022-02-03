let checkBoxes = document.querySelectorAll("input");
let listLength = checkBoxes.length;
let button1 = document.getElementById("button1");
for (let i = 1; i < listLength; i++) {
  checkBoxes[i].addEventListener("click", function () {
    document.querySelectorAll("span")[i - 1].classList.toggle("done");
  });
}

//Another, maybe better, way of doing the for loop for crossing out the text
// const checkBoxLabels = document.querySelectorAll("span");
// for (let i = 0; i < checkBoxes.length; i++) {
//   const checkBox = checkBoxes[i];
//   const label = checkBoxLabels[i];
//   checkBox.addEventListener("click", () => {
//     label.classList.toggle("done");
//   });
// }
