const cep = '01001000'

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

fetchResult
  .then(response => {
    console.log("SUCESSO NO FETCH ", response);
    const json = response.json();
    json.then(result => {
      console.log("Sucesso no JSON",result);
    })
    .catch(error => {
      console.log("Erro no json", error);
    })
    
  })
  .catch(error => {
    confirm("Deu ruim no Fetch", error);
  })

  console.log("A");//vai axecutar primeiro pq o fetch é uma promisse 
  console.log("B");//que tem uma execução assincrona