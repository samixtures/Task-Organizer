let checkBoxes = document.querySelectorAll("input");
let listLength = checkBoxes.length;
for (let i = 0; i < listLength; i++) {
  checkBoxes[i].addEventListener("click", function () {
    document.querySelectorAll("span")[i].classList.toggle("done");
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
