const inputs = document.querySelectorAll('.angle');
const isTriangleBtn = document.querySelector('#is-triangle');
const output = document.querySelector('.output');

function calculateSum(angle1, angle2, angle3){
    const suma = angle1 + angle2 + angle3;
    return suma;
}

function istriangle(){
    const sum = calculateSum(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    console.log(sum);
    if(sum === 180){
        output.innerText = "the angles form a triangle";
    }
    else{
        output.innerText = "the angles don't form a triangle";
    }
}

isTriangleBtn.addEventListener("click", istriangle);