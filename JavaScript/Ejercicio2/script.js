function number1(){
    const number1 = document.getElementById('num1').value 
    return number1;
}

function number2(){
    const number2 = document.getElementById('num2').value 
    return number2;
}

function Calcular(){
    const Resultado = parseInt(number1()) + parseInt(number2())
    console.log(Resultado);
    document.getElementById("Resultado").textContent = Resultado
}
