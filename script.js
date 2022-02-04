let checkBoxes = document.querySelectorAll("input");
let listLength = checkBoxes.length;
let button = document.getElementById("button1");
let button2 = document.getElementById("button2");
let input = document.getElementById("userInput");
let div = document.getElementById("divertido!");
let body =  document.querySelector("body");
let darkMode = document.getElementById("dark/light");

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

function createTaskAndCross() {
    createTask();
    checkBoxes = document.querySelectorAll("input");
    listLength = checkBoxes.length;
    checkBoxes[listLength-1].addEventListener("click", function () {
        document.querySelectorAll("span")[listLength-2].classList.toggle("done");
    })
}

function addTask(){
    button.addEventListener("click", function() {
        if (input.value.length > 0) {
            createTaskAndCross();
        }
      });
    input.addEventListener("keypress", function(event) {
        if (input.value.length > 0 && event.code === "Enter"){
            createTaskAndCross();
        }
      });
}

function darkModeFunc(){
    darkMode.addEventListener("click", function() {
       body.classList.toggle("darkMode");
    })
}


  crossOutTasks();
  addTask();
  darkModeFunc();







//ANOTHER, MAYBE BETTER, WAY OF DOING THE FOR LOOP FOR CORSSOUT THE TASKS
// const checkBoxLabels = document.querySelectorAll("span");
// for (let i = 0; i < checkBoxes.length; i++) {
//   const checkBox = checkBoxes[i];
//   const label = checkBoxLabels[i];
//   checkBox.addEventListener("click", () => {
//     label.classList.toggle("done");
//   });
// }
