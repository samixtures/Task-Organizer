//INITIALIZATION OF IMPORTANT VARIABLES (I THINK MOST ARE IMPORTANT 🤷‍♂️)


let checkBoxes = document.querySelectorAll("input");
let listLength = checkBoxes.length;
let button = document.getElementById("button1");
let button2 = document.getElementById("button2");
let input = document.getElementById("userInput");
let div = document.getElementById("divertido!");
let body =  document.querySelector("body");
let darkMode = document.getElementById("dark/light");
let allButtons = document.querySelectorAll("button");
let value, key;
let title = document.getElementById("txt");
let aboutBtn = document.getElementById("darkBtn");










// let taskArray = [];

// localStorage.set('tasks', taskArray)

/*
  If taskArray doesn't exist:
    When we create a task we should taskArray.push(createTask)
    then localStorage.set('tasks', JSON.stringify(taskArray))
  else:
    let taskVar = localStroage.get(JSON.parse('tasks'))
    taskVar.push(createTask)
    localStorage.set('tasks', JSON.stringify(taskArray))

*/


//To put tasks as an array into the value of one key in local storage
/*
  if (!localStorage.getItem('tasks')) {
    taskArray.push(input.value);
    localStorage.setItem('tasks', JSON.stringify(taskArray));
  }
  else {
    getJSON = JSON.parse(localStorage.getItem('tasks'));
    taskArray = getJSON;
    taskArray.push(input.value);
    localStorage.setItem('tasks', JSON.stringify(taskArray));
  }

*/

//To retain the tasks after reloading
/*
  getJSON = JSON.parse(localStorage.getItem('tasks'));
  taskArray = getJSON;
  let i = getJSON.length-1;
  while(i >= 0) {
    input.value = taskArray[i]
    addTask();
    i--
  }


  let i = localStorage.length-1;
  while(i >= 0){
    // console.log("i is " + i)
    // console.log(localStorage.getItem(localStorage.key(i)));
    input.value = localStorage.getItem(localStorage.key(i));
    addTask();
    i--;
  }
*/

//FUNCTION FOR CREATING TASKS, CHECKBOX, AND X BOX



function createTask(inp){
    let checker = document.createElement("input");
    checker.setAttribute("type", "checkbox")
    let span = document.createElement("span");
    span.setAttribute("contentEditable", true)
    span.appendChild(document.createTextNode(inp + " "));
    //LOCAL STORAGE
    key = input.value.length/input.value.charCodeAt(0);
    value = input.value;
    localStorage.setItem(key, value);
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



  //DUNO WHAT THIS IS
  let newSpanner = document.querySelectorAll("span");
  let newChecker = document.querySelectorAll("input");
  let newBr = document.querySelectorAll("br");
















//FUNCTION FOR USING THE X BUTTON TO DELETE TASKS. START AT 3 CUZ WE HAVE DARK MODE, ENTER, AND RESET




function deleteTasks(){
  for (let i = 4; i < listLength+3; i++) {
    allButtons[i].addEventListener("click", function(){
      newSpanner[i-4].remove();
      newChecker[i-3].remove();
      newBr[i-4].remove();
      console.log(i);
      allButtons[i].remove();
      console.log("X marks the spot!")
    })
  }
}
// SO, when pressing a button it does do everything in the function
// multiple times (unless it's the last task)
// BUT since i it attempts
// to do .remove of the span, checkbox, br, and button
// several times so it only deletes one task since it tries
// to delete only that one task multipl times.

// So we add to the localStorage with specific indices
// But then they get randomized so when clicking the third
// X button for example it will delete the
// localStorage element with key 3
// but that element won't be the one next to the third X mark












//THIS IS FOR CROSSING TASKS OUT. IT'S COMPLICATED... PROLY NEED TO CONSOLE LOG TO FIGURE THINGS OUT


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











  

  //THIS IS FOR HARD CODED TASKS I BELIEVE: DON'T THINK IT'S NECESSARY ANYMORE



  let tempCheckBoxes = document.querySelectorAll("input");
  let tempSpanner = document.querySelectorAll("span");
  for (let i = 1; i < listLength; i++){
      tempCheckBoxes[i].addEventListener("click", function() {
      console.log(i + "has been checked");
      tempSpanner[i-1].classList.toggle("done");
      })
  }










//HONESTLY DON'T KNOW WHAT THIS IS ABOUT


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









//FUNCTION FOR PUTTING OTHER FUNCTIONS IN


// let map = new Map();
// let inpArray = [];
function addTask(){
        if (input.value.length > 0) {

        //FOR DELETING EACH ITEM FROM LOCAL STORAGE (WORKING ON IT)


          // inpArray.push(input.value);
          // map.set(input.value, counter);

        //OTHER IMPORTANT FUNCTIONS ALL IN 1


          createTaskAndCross();
          crossOutTasks();
          deleteTasks();
        }
}







  


//DARK MODE

  function darkModeFunc(){
    body.classList.toggle("darkMode");
    title.classList.toggle('darkMode');
    aboutBtn.classList.toggle('darkMode');
  }


  darkMode.addEventListener("click", function() {
    darkModeFunc();
    if(!sessionStorage.getItem('bgcol')) sessionStorage.setItem('bgcol', 'yes');
    else sessionStorage.removeItem('bgcol');
  })

  if(!sessionStorage.getItem('bgcol')) {
    darkModeFunc();
  }














//ACTUAL ADD TASK FUNCTION USAGE WITH CLICK AND "ENTER"



  button.addEventListener("click", function() {
    addTask();
  });

  input.addEventListener("keypress", function(event) {
    if (input.value.length > 0 && event.code === "Enter") addTask();
  });












//RETAIN TASKS AFTER REFRESH/XING OUT TAB USING LOCAL STORAGE




  let i = localStorage.length-1;
  while(i >= 0){
    // console.log("i is " + i)
    // console.log(localStorage.getItem(localStorage.key(i)));
    input.value = localStorage.getItem(localStorage.key(i));
    addTask();
    i--;
  }










//BRINGING UP/CLOSING NOTES FOR USER TO READ

  // const notesBtn = document.getElementById("notesBtn");
  // const notes = document.getElementById("notes");

  // notesBtn.addEventListener("click", function() {
  //   notes.classList.toggle('active');
  // })

  // function openNotes(n) {
  //   n.classList.toggle('active');
  // }

  // function closeNotes(n) {

  // }








//RETAIN TITLE WITH SESSION STORAGE




  if(!sessionStorage.getItem('title')) sessionStorage.setItem('title', 'Task Manager! 🙂');
  title.value = sessionStorage.getItem('title');
  console.log(title.textContent);
  function myFunction(val) {
  sessionStorage.setItem('title', val);
  title.innerHTML = sessionStorage.getItem('title');
  }






//RESET



  let resetButton = document.getElementById('reset');

  resetButton.addEventListener("click", function(){
    for (let i = 4; i < listLength+3; i++) {
      newSpanner[i-4].remove();
      newChecker[i-3].remove();
      newBr[i-4].remove();
      console.log(i);
      allButtons[i].remove();
      console.log("X marks the spot!")
    }
  
    localStorage.clear();
    sessionStorage.setItem('title', 'Task Manager 🙂!');
    title.value = 'Task Manager 🙂!';
    // allButtons[3].remove();
  })









  //TO DELETE SPECIFIC LOCAL STORAGE (MIGHT WORK ON AGAIN IN THE FUTURE)
    //PROBLEM: LOCAL STORAGE RANDOMIZES AFTER BEING INPUTTED AND THAT MESSES UP WHICH TASK GETS
    //DELETED IN LOCAL STORAGE WHEN THE X MARK IS CLICKED



// let allButtonX = document.getElementsByClassName("buttonXStyle")
//   for(let i = allButtonX.length-1; i >= 0; i--){
//     allButtonX[i].addEventListener('click', function() {
//       // console.log(map.get(inpArray[i])); //prints numbers from 0 to how ever many in array
//       console.log(localStorage.key(map.get(inpArray[i]))); //prints local storage keys

//       localStorage.removeItem(localStorage.key(map.get(inpArray[i])));

//       map.delete(inpArray[i]);
//       // console.log([...map.entries()]); //shows all map values. The value is indeed deleted
//       inpArray.splice(i, 1); //deletes 1 of whatever index i is

//     })
//   }
