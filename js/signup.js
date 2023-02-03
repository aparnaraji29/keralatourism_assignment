

 // validation of  password

let timeout;

    // traversing the DOM and getting the input and span using their IDs

 
    

    // The strong and weak password Regex pattern checker
    let password = document.getElementById("inputPassword4");
    let passerror = document.getElementById("pass-error");
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{8,}))')
    let repeatPassword = document.getElementById("inputPassword1");
    let pass1error = document.getElementById("pass1-error");
    function StrengthChecker(PasswordParameter){
        // We then change the badge's color and text based on the password strength

        if(strongPassword.test(PasswordParameter)) {
            passerror.style.backgroundColor = "green"
            passerror.textContent = 'Strong'
        } else if(mediumPassword.test(PasswordParameter)){
            passerror.style.backgroundColor = 'orange'
            passerror.textContent = 'Medium'
        } else{
            passerror.style.backgroundColor = 'red'
            passerror.textContent = 'Weak'
        }
    }

    password.addEventListener("input", () => {

        //The badge is hidden by default, so we show it

        passerror.style.display= 'block'
        clearTimeout(timeout);

        //We then call the StrengChecker function as a callback then pass the typed password to it

        timeout = setTimeout(() => StrengthChecker(password.value), 500);

        //Incase a user clears the text, the badge is hidden again

        if(password.value.length !== 0){
            passerror.style.display != 'block'
        } else{
            passerror.style.display = 'none'
        }
    });
    // validation of repeat password

   function validateRepeat(){
    
     if(repeatPassword.value !== password.value){
        pass1error.innerHTML="Password does not match"
        pass1error.style.color="red"
        return false
    }
    else{
        pass1error.innerHTML="Correct password"
        pass1error.style.color="green"
    }
    
   }

   
//  validation of email

let email = document.getElementById("inputEmail4");
let emailerror = document.getElementById("email-error");

let regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function validateEmail(){
    if(email.value.trim()==""){
        emailerror.innerHTML = " email cannot be empty"
        emailerror.style.color="red"
        return false
    }
    else if(!email.value.match(regexpEmail)){
        emailerror.innerHTML = "invalid email format "
        emailerror.style.color="red"
        // emailerror.style.border
        // emailerror.style.border="2px solid red"
        return false
    }
    else{
        emailerror.innerHTML = "valid format"
        emailerror.style.color="green"
        // emailerror.style.border="2px solid green"
        return true
    }
}

// phone number validation

let phone = document.getElementById("inputphone");
let phoneerror = document.getElementById("phone-error");
let regexPhone = /^(\d{3})[ -.]?(\d{3})[ -.]?(\d{4})$/g;
let regalph = /^([a-zA-Z]){1,}$/g;
function phonenumber() {
    
    if(phone.value.trim()=="") {
        phoneerror.innerHTML="Phone number field cannot be empty"
        phoneerror.style.color="red"
        return false
    }

    else if(phone.value.match(regalph)){
        phoneerror.innerHTML="Phone number should contain only numbers"
        phoneerror.style.color="red"
        return false
    }
   
    else if(phone.value.length>12){
        phoneerror.innerHTML="Only 10 characters allowed for Phone Number field."
        phoneerror.style.color="red"
        return false
    }
    else if(!phone.value.match(regexPhone)){
        phoneerror.innerHTML="Please enter valid Phone number"
        phoneerror.style.color="red"
        return false
    }
   
    else{
        phoneerror.innerHTML="valid "
        phoneerror.style.color="green"
        return true
    }
   
  }


    
    

