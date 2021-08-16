const inputs = document.querySelectorAll('.input');
const submitBtn = document.querySelector('.check');
const outputText = document.querySelector('.output');

function calculateArea(){
    const res = 0.5*Number(inputs[0].value)*Number(inputs[1].value);
    outputText.innerText = "the area of the triangle is " + res;
}

submitBtn.addEventListener("click", calculateArea);