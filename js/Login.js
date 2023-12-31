


var login = document.getElementById("signin");
login.onclick = (e) => {
  e.preventDefault();

  
var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')

  var getUser = localStorage.getItem("signinEmail");
  var getPass = localStorage.getItem("signinPassword");

  if (signinEmail == "" && signinPassword == "") {
    console.log("Input field has no value");
  } else {
    for(var i = 0; i < user.length; i++){
      if (signinEmail == getUser && signinPassword == getPass) {
      console.log(`Login successfull, hi ${usernameAddress}`);
    } else {
      console.log('m4 mawgod')   
      }}
    
  }
}