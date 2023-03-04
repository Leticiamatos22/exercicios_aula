/*let n1 = [3,4,1,5]
let n2 = [0,0,0,0]

    for(let i = 0; i<n1.length;i++){
        n2[3-i] = n1[i]
        
    }
    console.log(n1)
    console.log(n2)
*/



//trocar de posição o vetor 
let n = [3,4,1,5,9];
let aux 


for(let controle = 0; controle < n.length / 2; controle ++){
    aux = n[n.length-1-controle]
    n[n.length-1-controle]=n[controle]
    n[controle]=aux     
}
console.log(n);


