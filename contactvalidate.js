function nameField(){
    var nameValidate = document.getElementById('nameInput').value;
    if(nameValidate==""){
        document.getElementById('nameInputBlock').style.display = "block";
        document.getElementById('nameInput').style.border = "1px solid red";
        document.getElementById('nameInputBlock').style.color = "red";
    }else{
        document.getElementById('nameInputBlock').style.display = "none";
        document.getElementById('nameInput').style.border = "1px solid rgb(118, 118, 118)";
    }
}

function validateEmail() {

    var emailInputValue = document.getElementById('emailInput').value;
    console.log(emailInputValue);
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailInputValue.match(emailPattern)) {
        document.getElementById('emailHelpBlock').style.display = "block";
        document.getElementById('emailInput').style.border = "1px solid green";
        document.getElementById('emailHelpBlock').style.color = "red";
     }else{
        document.getElementById('emailHelpBlock').style.display = "none";
        document.getElementById('emailInput').style.border = "1px solid rgb(118, 118, 118)";
    
        
     }
    }

     function dateField(){
        const dateValidate = document.getElementById('dateInput').value;
        if(!dateValidate){
            document.getElementById('dateInputBlock').style.display = "block";
            document.getElementById('dateInput').style.border = "1px solid red";
            document.getElementById('dateInputBlock').style.color = "red";
        }else{
            document.getElementById('dateInputBlock').style.display = "none";
            document.getElementById('dateInput').style.border = "1px solid rgb(118, 118, 118)";
        }
    }

    function timeField(){
        const timeValidate = document.getElementById('timeInput').value;
        if(!timeValidate){
            document.getElementById('timeInputBlock').style.display = "block";
            document.getElementById('timeInput').style.border = "1px solid red";
            document.getElementById('timeInputBlock').style.color = "red";
        }else{
            document.getElementById('timeInputBlock').style.display = "none";
            document.getElementById('timeInput').style.border = "1px solid rgb(118, 118, 118)";
        }
    }  
    function noChange(){
        document.getElementById('nameInput').style.boxShadow= "none";
        document.getElementById('emailInput').style.boxShadow= "none";
        document.getElementById('dateInput').style.boxShadow= "none";
        document.getElementById('timeInput').style.boxShadow= "none";
    }