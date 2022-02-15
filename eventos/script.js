const inputName = document.forms.cadastro.name;
//console.log(inputName)
inputName.addEventListener('keyup', handleInputNameKeyUp);

const inputEmail = document.forms.cadastro.email;
inputEmail.addEventListener('change', handleInputEmailChange);

//const btnSubmitt = document.forms.cadastro.btn;
//console.log(btnSubmitt)

//outra maneira
const btnSubmit = document.querySelector('[type= "submit"]')
btnSubmit.addEventListener('click', handleBtnSubmitClik);

function handleBtnSubmitClik(event) {
    event.preventDefault();
    console.log(`Dados: ${inputName.value}, ${inputEmail.value}`)
}





function handleInputNameKeyUp(event) {
    console.log(event.target.value);
}

function handleInputEmailChange(event) {
    if(validateEmail(event.target.value)){
        event.target.classList.remove("input-error");
        console.log("Deu certo")
    }
    else{
        event.target.classList.add("input-error");
        alert("Email Invalido")
    }
   
}




// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }