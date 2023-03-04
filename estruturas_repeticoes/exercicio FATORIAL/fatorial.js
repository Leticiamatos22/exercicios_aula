var btCalcular = document.getElementById('btnCalcular');
btCalcular.addEventListener("click", fatorial)

function fatorial() {
    let n1 = parseInt(document.getElementById('n1').value)
    let result = 1

    while(n1 >= 1){
        result = result * n1
        n1--
    }
    document.getElementById('result').innerHTML = "Resultado = " + result
    
}
