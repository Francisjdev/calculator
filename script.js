let num1, num2 
let operator
let screen = document.querySelector(".screen");
const btns = document.querySelectorAll(".btn");

const add = function(a,b){
    console.log(a+b)
    return a+b
}
const substract =  function(a,b){
    return a-b
}
const multiply =  function(a,b){
    return a*b
}
const divide =  function(a,b){
    return a/b
}

const operate = function (num1, num2, operator){
    switch (operator){
        case "+": add(num1,num2);
        break;
    }


}


for (let btn of btns){
    btn.addEventListener('click',() => {
 
    screen.textContent=btn.textContent;
});
}
 

