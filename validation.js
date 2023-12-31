
function validateEmail() {

    var emailInputValue = document.getElementById('exampleFormControlInput1').value;
    console.log(emailInputValue);
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailInputValue.match(emailPattern)) {
        document.getElementById("emailHelpBlock").style.display = "block";
        document.getElementById("exampleFormControlInput1").style.border = "1px solid red";
        document.getElementById("emailHelpBlock").style.color = "red";
     }else{
        document.getElementById("emailHelpBlock").style.display = "none";
        document.getElementById("exampleFormControlInput1").style.border = "1px solid rgb(222, 226, 230)";
     }
  
     
  
  }
  
   function passwordRequirement(){
    document.getElementById("passwordHelpBlock").style.display = "block";
  }
  
  function validatePassword() {
    var pswdInputValue = document.getElementById('inputPassword5').value;
    console.log(pswdInputValue);
  
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!pswdInputValue.match(passPattern)) {
      document.getElementById("inputPassword5").style.border = "1px solid red";
      document.getElementById("passwordHelpBlock").style.color = "red";
   }else{
      document.getElementById("passwordHelpBlock").style.display = "none";
      document.getElementById("inputPassword5").style.border = "1px solid rgb(222, 226, 230)";
   }
  
   
  
  }
  function iconVisible() {
      document.getElementById("iconId").style.visibility = "visible";
  }
  
  function changeIcon() {
  
    var pswdInputValue = document.getElementById('inputPassword5');
    if(pswdInputValue.type==="password"){
      pswdInputValue.type="text";
      iconId.innerHTML = '<i class="fa-solid fa-eye " style="color: #aeb5c2;"></i>';
    }else{
      pswdInputValue.type="password";
      iconId.innerHTML = '<i class="fa-solid fa-eye-slash " style="color: #aeb5c2;"></i>';
    }
  }
  