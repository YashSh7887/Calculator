////////////////////////////// Declarations ///////////////////////////////////////////
let a='';
let b='';
let operator;
const numbers = document.querySelectorAll(".numbers");
const symbols = document.querySelectorAll(".symbols");
let input = document.querySelector("#input");
let output = document.querySelector("#output");
const answer = document.querySelector("#answer");
const clear = document.querySelector("#clear");
////////////////////////////// Functions //////////////////////////////////////////////
function addition(a,b){
    return a+b;
}
function subtraction(a,b){
    return a-b;
}
function multiplication(a,b){
    return a*b;
}
function division(a,b){
    if(b===0){
        return "Cannot divide by zero";

    }
    else{
    return a/b;}
}
function operation(a,b,operator){
let result;
 switch(operator){
    case "+": result = addition(a,b);
    break;
    case "-": result = subtraction(a,b);
    break;
    case "*": result = multiplication(a,b);
        break;
    case "/": result = division(a,b);
    break;
    default: return "ERROR";
}
return result;
}
function display (item){
    input.textContent+=item.textContent;

}
/////////////////Event handlers////////////////////////////////
for(let i=0; i<symbols.length; i++){
    symbols[i].addEventListener("click",()=>{
        if(a && b && operator){
            let result = operation(Number(a),Number(b),operator);
            output.textContent= result;
            a= result.toString();
            b = '';
            operator = null;
        }
        else{
        a=input.textContent;
        operator=symbols[i].textContent;
        display(symbols[i]);}
        
    })
}
for(let i=0; i<numbers.length;i++){
    numbers[i].addEventListener("click",()=>{
        display(numbers[i]);
        if(operator){
            b+=numbers[i].textContent;
        }
        else{
            a+=numbers[i].textContent;
        }
    });
}
answer.addEventListener("click", ()=>{
if (a && b && operator){
    let result = operation(Number(a),Number(b),operator);
    output.textContent= result;
    a=result.toString();
    b='';
    operator=null
}
else{
    output.textContent="error";
}

})
clear.addEventListener("click",()=>{
    input.textContent='';
    output.textContent='';
    a='';
    b='';
    operator=null;
})



