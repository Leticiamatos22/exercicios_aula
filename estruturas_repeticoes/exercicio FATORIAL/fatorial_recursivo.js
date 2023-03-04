var btCalcular = document.getElementById('btnCalcular');
btCalcular.addEventListener("click", chamar)

function chamar(){
    let n1 = parseInt(document.getElementById('n1').value)
    let result = document.getElementById('result')
    result.innerText= fatorial(n1)
}
function fatorial(n) {
    if (n==1)
    return 1
    return n * fatorial(n-1)
}
   