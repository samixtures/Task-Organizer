let checkBoxes = document.querySelectorAll("input");
let listLength = checkBoxes.length;
let button = document.getElementById("button1");
let button2 = document.getElementById("button2");
let input = document.getElementById("userInput");
let div = document.getElementById("divertido!");
let body =  document.querySelector("body");
let darkMode = document.getElementById("dark/light");
let allButtons = document.querySelectorAll("button");

function createTask(){
    let checker = document.createElement("input");
    checker.setAttribute("type", "checkbox")
    let span = document.createElement("span");
    span.setAttribute("contentEditable", true)
    span.appendChild(document.createTextNode(input.value));
    let br = document.createElement("br");
    let buttonX = document.createElement("button");
    buttonX.appendChild(document.createTextNode("❌"));
    div.appendChild(checker);
    div.appendChild(span);
    div.appendChild(buttonX);
    div.appendChild(br);
    input.value="";
  }

  let newSpanner = document.querySelectorAll("span");
  let newChecker = document.querySelectorAll("input");
  let newBr = document.querySelectorAll("br");
function deleteTasks(){
  for (let i = 2; i < listLength+1; i++) {
    allButtons[i].addEventListener("click", function(){
      newSpanner[i-2].remove();
      newChecker[i-1].remove();
      newBr[i-2].remove();
      allButtons[i].remove();
      console.log("X marks the spot!")
    })
  }
}

function crossOutTasks(){
    for (let i = 2; i < listLength; i++) {
        let spanner = document.querySelectorAll("span");
        checkBoxes[i].addEventListener("click", function () {
          //console.log(checkBoxes[i])
          //^This console.log reveals a great deal: If we add 4 tasks and check mark them all, the first will console log 4 times, 2nd 3 times, 3rd 2 times, and last 1.
          spanner[i - 1].classList.toggle("done");
        });
        checkBoxes[i-1].addEventListener("click", function () {
          let spanner = document.querySelectorAll("span");
          spanner[i - 2].classList.toggle("done");
        });
        // console.log("listLength", listLength);
        // console.log("spanner", spanner);
      }
  }

function createTaskAndCross() {
    createTask();
    checkBoxes = document.querySelectorAll("input");
    allButtons = document.querySelectorAll("button");
    newSpanner = document.querySelectorAll("span");
    newChecker = document.querySelectorAll("input");
    newBr = document.querySelectorAll("br");
    listLength = checkBoxes.length;
    // crossOutTasks();
}

function addTask(){
    button.addEventListener("click", function() {
        if (input.value.length > 0) {
            createTaskAndCross();
            crossOutTasks();
             deleteTasks();
        }
      });
    input.addEventListener("keypress", function(event) {
        if (input.value.length > 0 && event.code === "Enter"){
            createTaskAndCross();
            crossOutTasks();
            deleteTasks();
        }
      });
}

function darkModeFunc(){
    darkMode.addEventListener("click", function() {
       body.classList.toggle("darkMode");
    })
}


  // crossOutTasks();
  addTask();
  darkModeFunc();
  // deleteTasks();







//ANOTHER, MAYBE BETTER, WAY OF DOING THE FOR LOOP FOR CORSSOUT THE TASKS
// const checkBoxLabels = document.querySelectorAll("span");
// for (let i = 0; i < checkBoxes.length; i++) {
//   const checkBox = checkBoxes[i];
//   const label = checkBoxLabels[i];
//   checkBox.addEventListener("click", () => {
//     label.classList.toggle("done");
//   });
// }
