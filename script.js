let checkBox = document.querySelectorAll("input");
let listLength = checkBox.length;
for (let i = 0; i < listLength; i++){
    checkBox[i].addEventListener("click", function(){
    document.querySelectorAll("span")[i].classList.toggle("done");
    })
}
// checkBox.addEventListener("click", function(){
//     document.querySelector("span").classList.toggle("done");
// })


