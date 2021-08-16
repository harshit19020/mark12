const inputs = document.querySelectorAll('.input');
const submitBtn = document.querySelector('.calculate');
const outputText = document.querySelector('.output');

function calculate(a,b){
    const res = (a*a) + (b*b);
    return res;
}

function hypo(){
    const sum = calculate(Number(inputs[0].value), Number(inputs[1].value));
    const lengthOfHypotenuse = Math.sqrt(sum);
    outputText.innerText = "the length of the hypotenuse is " + lengthOfHypotenuse;
}

submitBtn.addEventListener("click", hypo);