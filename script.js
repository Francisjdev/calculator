let num1, num2 
let operator
let result
let screen = document.querySelector(".screen");
const btns = document.querySelectorAll("#btn");
const opes = document.querySelectorAll("#ope");
const res  = document.querySelector("#res")

const clear = document.querySelector("#clear");
const back = document.querySelector("#back");
screen.textContent = "0";
const add = function(a,b){
    result = a+b
    return result
}
const substract =  function(a,b){
    result = a-b
    return result
}
const multiply =  function(a,b){
    result = a*b
    return result
}
const divide =  function(a,b){
    result = a/b
    return result
}

const operate = function (num1, num2, operator){
    switch (operator){
        case "+": add(num1,num2);
        break;
        case "-": substract(num1,num2);
        break;
        case "*": multiply(num1,num2);
        break;
        case "/": divide(num1,num2);
        break;
    }


}

back.addEventListener('click',()=>{
    let holder = screen.textContent.split('')
    holder.pop();
    screen.textContent =  holder.join('')
})
clear.addEventListener('click',()=>{
    num1=undefined;
    num2=undefined;
    operator = undefined;
    screen.textContent = "0"
})
for (let ope of opes){
    ope.addEventListener('click',() => {
        if(operator!== undefined){
            console.log("entre a esta condicion")

            num2= parseFloat(screen.textContent);
            console.log(num2)

            operate(num1,num2,operator);
            console.log(result)
            num1= result;
            console.log(num1)
            operator = ope.textContent;
            screen.textContent=ope.textContent;
        } else {
             console.log("no entre al if ")
        num1 = parseFloat(screen.textContent);
        console.log("este es el res que se usa como num1 "+ num1);
        operator = ope.textContent;
        console.log("este es el nuevo operator " + operator);
        screen.textContent=ope.textContent;
        }
       
    })
}

for (let btn of btns){
    btn.addEventListener('click',() => {
            if (screen.textContent === "0" && btn.textContent === ".")
                {
                    screen.textContent= screen.textContent+ btn.textContent;
                }
            else if (screen.textContent === "0" || screen.textContent ==="+" || screen.textContent ==="-" || screen.textContent ==="*" || screen.textContent ==="/")
                {
                    screen.textContent=btn.textContent;
                }
            else 
                {
                    screen.textContent= screen.textContent+ btn.textContent;
                }
});
}
 
res.addEventListener("click", ()=>{

        num2= parseFloat(screen.textContent);
        operate(num1,num2,operator);
        console.log("el resultado es " + result)
        screen.textContent = result;operator = ope.textContent;

} )

