function f(g,h) {

    setTimeout(() => {

        if(10 > 0) {
            g("P")
        }
        else{
            h("Q")
        }
        
    }, 3000);
   
}


//function executarSeResolver(valor) {
  //  console.log("Resolveu com o valor: " + valor);    
//}

//function executarSeRejeitar(valor) {
  //  console.log("Rejeitada com o valor: " + valor);    
//}

const minhaPromise = new Promise(f);

//minhaPromise.then(executarSeResolver)//pode ser em lambida tbm

minhaPromise
  .then(valor => {
    console.log("Resolveu com o valor: " + valor); 
   })
 .catch(valor => {
    console.log("Rejeitada com o valor: " + valor);   
  });

 console.log(minhaPromise)