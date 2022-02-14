function dizerOla() {
    console.log("ola")
}

//setTimeout(dizerOla,2000)

function dizerBomDia(nome) {
    console.log("Bom dia " + nome);
}

setTimeout(() => {
    dizerBomDia("Deivid");
    setTimeout(()=>{
        dizerBomDia("Camila");
        setTimeout(()=>{
            dizerBomDia("Davi")
        },2000)
    },2000)    
},2000);

console.log("A")
console.log("B")

