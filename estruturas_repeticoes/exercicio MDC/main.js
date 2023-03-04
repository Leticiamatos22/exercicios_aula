var btCalcular = document.getElementById('btnCalcular');
btCalcular.addEventListener("click", mdc)
function mdc(){
    let n1 = parseInt(document.getElementById('n1').value); //Receber variáveis
    let n2 = parseInt(document.getElementById('n2').value);
    let result = document.getElementById('result');
    //Processamento
    if(n1==n2){
        result.innerText = n1; 
    }
    else{
        let ctrl
        n1>n2 ? ctrl = n2 : ctrl = n1 //Operador ternário 
        while(n1%ctrl!=0 || n2%ctrl!=0)
            ctrl--; //Enquanto o resto da divisão for !=0, decrementar
        result.innerText = ctrl;
    }

    /*Diferença entre && e ||
    n1%ctrl!=0 && n2%ctrl!=0
    0       0 --> true
    1       0 -->false
    0       1 -->false
    1       1 -->false

    n1%ctrl!=0 || n2%ctrl!=0
    0       0 --> true
    1       0 --> true
    0       1 --> true
    1       1 --> false */
}