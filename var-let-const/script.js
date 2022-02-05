const x = 10;
let y = 10;

if(x>0){
    var a = 100;
    let b = 200;
    const c = 300;
    console.log("imprimindo dentro do if")
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log("imprimindo fora do if")
console.log(a, 'vazando scopo fora da strutura de controle')
//console.log(b)
//console.log(c)-> script.js:15-Uncaught ReferenceError: c is not defined
        
//x=10;
//y=5;

console.log(x)
console.log(y)

console.log("imprimindo for")
for(let i=0; i<5;i++){
    console.log(i)
}
//console.log(i)