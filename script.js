let num1, num2 
let operator
let screen = document.querySelector(".screen");
const btns = document.querySelectorAll("#btn");
const opes = document.querySelectorAll("#ope");
screen.textContent = "0";
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
        case "-": substract(num1,num2);
        break;
        case "*": multiply(num1,num2);
        break;
        case "/": divide(num1,num2);
        break;
    }


}
for (let ope of opes){
    ope.addEventListener('click',() => {
        if(num1 === undefined){
            return alert("todo mal Perro")
        }
        num1 = parseFloat(screen.textContent);
        operator = ope.textContent;
        screen.textContent=ope.textContent;
        console.log(num1)
        console.log(operator);
        console.log(num2)

    })
}

for (let btn of btns){
    btn.addEventListener('click',() => {
            if (screen.textContent === "0" && btn.textContent === ".")
                {
                    screen.textContent= screen.textContent+ btn.textContent;
                }
            else if (screen.textContent === "0" || screen.textContent ==="+")
                {
                    screen.textContent=btn.textContent;
                }
            else 
                {
                    screen.textContent= screen.textContent+ btn.textContent;
                }
});
}
 

