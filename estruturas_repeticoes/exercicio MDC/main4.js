var btCalcular = document.getElementById('btnCalcular');
btCalcular.addEventListener("click", executar)

function executar() {
    let n1 = parseInt(document.getElementById('n1').value)
    let n2 = parseInt(document.getElementById('n2').value)
    var result = document.getElementById('result')

    if (n1 > n2) {
        result.innerText = mdc(n1, n2)

    } else {
        result.innerText = mdc(n2, n1)
    }
}

function mdc(maior, menor) {
    if(maior%menor==0)
        return menor
    for (let ctrl = parseInt(menor/2); ctrl >= 1; ctrl--) {
        if (menor % ctrl == 0 && maior % ctrl == 0) {
            return ctrl
        }
    }
}