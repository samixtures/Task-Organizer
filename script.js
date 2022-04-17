let checkBoxes = document.querySelectorAll("input");
let listLength = checkBoxes.length;
let button = document.getElementById("button1");
let button2 = document.getElementById("button2");
let input = document.getElementById("userInput");
let div = document.getElementById("divertido!");
let body =  document.querySelector("body");
let darkMode = document.getElementById("dark/light");
let allButtons = document.querySelectorAll("button");
let newCounter = 0;

function createTask(inp){
    let checker = document.createElement("input");
    checker.setAttribute("type", "checkbox")
    let span = document.createElement("span");
    span.setAttribute("contentEditable", true)
    span.appendChild(document.createTextNode(inp + " "));
    //LOCAL STORAGE
    localStorage.setItem(String(newCounter), inp);
    console.log(localStorage.getItem(String(newCounter)));
    newCounter++;
    //LOCAL STORAGE
    span.classList.add("page");
    let br = document.createElement("br");
    let buttonX = document.createElement("button");
    buttonX.appendChild(document.createTextNode("❌"));
    buttonX.classList.add("buttonXStyle")
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
deleteTasks();//This is for the tasks that I hard coded

function crossOutTasks(){
    for (let i = 1; i < listLength; i++){
      tempCheckBoxes[i].addEventListener("click", function() {
        //console.log(i + "has been checked");
        // console.log("Class name is " + tempSpanner[i-1].className);
      tempSpanner[i-1].classList.toggle("done");
      })
      if (i > 1){
        tempCheckBoxes[i-1].addEventListener("click", function() {
          //console.log(i + "has been checked");
          // console.log("Class name is " + tempSpanner[i-1].className);
        tempSpanner[i-2].classList.toggle("done");
        })
      }
    }
  }
  let tempCheckBoxes = document.querySelectorAll("input");
  let tempSpanner = document.querySelectorAll("span");
  for (let i = 1; i < listLength; i++){
      tempCheckBoxes[i].addEventListener("click", function() {
      console.log(i + "has been checked");
      tempSpanner[i-1].classList.toggle("done");
      })
  }

function createTaskAndCross() {
    createTask(input.value);
    checkBoxes = document.querySelectorAll("input");
    allButtons = document.querySelectorAll("button");
    newSpanner = document.querySelectorAll("span");
    newChecker = document.querySelectorAll("input");
    newBr = document.querySelectorAll("br");
    tempCheckBoxes = document.querySelectorAll("input");
    tempSpanner = document.querySelectorAll("span");
    listLength = checkBoxes.length;
}
let counter = 0;
function addTask(){
        if (input.value.length > 0) {
          createTaskAndCross();
          crossOutTasks();
          deleteTasks();
          counter++;
        }
}

function darkModeFunc(){
    darkMode.addEventListener("click", function() {
       body.classList.toggle("darkMode");
    })
}


//LOCAL STORAGE

//Store the input value
//if the local storage map is not empty, do the functions that add tasks/check/Xs
//with local storage being somehow put into the task name

//Everytime we press the x, delete an item from local storage map (.removeItem)

  localStorage.clear();
  // if (input.value!="") addTask();
  button.addEventListener("click", function() {
    addTask();
  });
  input.addEventListener("keypress", function(event) {
    if (input.value.length > 0 && event.code === "Enter") addTask();
  });

  


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
