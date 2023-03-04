//ordenar o vetor em ordem crescente
let num = [3,6,1,7,9,4,2]
let aux

for(let contAux = 0; contAux <num.length; contAux++){
    for(let cont = 0; cont<num.length-1; cont++){
        if(num[cont] > num[cont+1]) {
            aux = num[cont]
            num[cont] = num[cont+1]
            num[cont+1] = aux
        }
    }        
}
console.log(num)