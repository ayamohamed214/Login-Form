
//   ------------------------signup--------------
var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')



  
var user = []






   //                                    regex

var nameRegex = /^\w{3,}(\s+\w+)*$/;
var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var passWordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
var nameMassege =document.getElementById('nameFunction')
var emailMassege =document.getElementById('emailFunction')
var passMassege =document.getElementById('passFunction')

signupName.addEventListener("input", function () {
  validateName(signupName, nameRegex);
  });
  signupEmail.addEventListener("input", function () {
    validateEmail(signupEmail, emailRegex);
  });
  signupPassword.addEventListener("input", function () {
    validatePassWord(signupPassword, passWordRegex);
  });
  function validateName(element, regex) {
    var testRegex = regex;
    if (testRegex.test(element.value)) {
      element.classList.add("is-valid");
      element.classList.remove("is-invalid");
      nameMassege.classList.add("d-none");
return true
  
    } else { //not valid
      element.classList.add("is-invalid");
      element.classList.remove("is-valid");
      nameMassege.classList.remove("d-none");
      return false;
    }


  }
  function validateEmail(element, regex) {
    var testRegex = regex;
    if (testRegex.test(element.value)) {
      element.classList.add("is-valid");
      element.classList.remove("is-invalid");
      emailMassege.classList.add("d-none");
      return true
  
    } else { //not valid
      element.classList.add("is-invalid");
      element.classList.remove("is-valid");
      emailMassege.classList.remove("d-none");
      return false;
    }


  }
  function validatePassWord(element, regex) {
    var testRegex = regex;
    if (testRegex.test(element.value)) {
      element.classList.add("is-valid");
      element.classList.remove("is-invalid");
      passMassege.classList.add("d-none");
      return true
  
    } else { //not valid
      element.classList.add("is-invalid");
      element.classList.remove("is-valid");
      passMassege.classList.remove("d-none");
      return false;
    }


  }



  function signUp(){
    if(validatePassWord() == true&& validateEmail()== true&& validateName()== true){

     var usreInfo={
       userName:signupName.value,
       userEmail:signupEmail.value,
     userPassWord:signupPassword.value,
     }
     user.push(usreInfo)
     console.log('sdfsfc')
     localStorage.setItem('usreInfo',  JSON.stringify(user))
     }
   else{
   
     console.log('bayz')
   }
   }
   