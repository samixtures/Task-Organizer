let checkBoxes = document.querySelectorAll("input");
let listLength = checkBoxes.length;
let button = document.getElementById("button1");
let input = document.getElementById("userInput");
let div = document.getElementById("divertido!");

function createTask(){
    let checker = document.createElement("input");
    checker.setAttribute("type", "checkbox")
    let span = document.createElement("span");
    span.appendChild(document.createTextNode(input.value));
    let br = document.createElement("br");
    div.appendChild(checker);
    div.appendChild(span);
    div.appendChild(br);
    input.value="";
  }

function crossOutTasks(){
    for (let i = 1; i < listLength; i++) {
        checkBoxes[i].addEventListener("click", function () {
          document.querySelectorAll("span")[i - 1].classList.toggle("done");
        });
      }
  }

button.addEventListener("click", function () {
    createTask();
  });

  crossOutTasks();






//WHAT I WAS TRYING TO MAKE THE NEW TASKS GET CROSS OUT 
//   button1.addEventListener("click", function () {
//     createTask();
//     listLength++;
//     let newCheckBoxes = document.querySelectorAll("input");
//     let spanSelector = document.querySelectorAll("span");
//     console.log("newChechBoxes", newCheckBoxes);
//     console.log("spanSelector", spanSelector);
//     newCheckBoxes[listLength].addEventListener("click", function () {
//         spanSelector[listLength-1].classList.toggle("done");
//     });
//   });

//ANOTHER, MAYBE BETTER, WAY OF DOING THE FOR LOOP FOR CORSSOUT THE TASKS
// const checkBoxLabels = document.querySelectorAll("span");
// for (let i = 0; i < checkBoxes.length; i++) {
//   const checkBox = checkBoxes[i];
//   const label = checkBoxLabels[i];
//   checkBox.addEventListener("click", () => {
//     label.classList.toggle("done");
//   });
// }
