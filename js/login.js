let username = document.getElementById("exampleInputEmail1");

let usererror = document.getElementById("user-error");
let regexName = /^[A-Za-z0-9]{8,15}$/g;

function validateName(){
    if(username.value.trim()==""){
        usererror.innerHTML="Username cannot be empty"
        usererror.style.color= "red"
        return false
    }
    else if(username.value.length<8){
    usererror.innerHTML="Username is too short"
    usererror.style.color= "red"
    return false
    }
    else if(username.value.length>15){
    usererror.innerHTML="Username is too long"
    usererror.style.color= "red"
    return false
    }
    else if(!username.value.match(regexName)){
    usererror.innerHTML="invalid username"
    usererror.style.color= "red"
    return false
    }
    else{
    usererror.innerHTML="valid"
    usererror.style.color= "green"
    return true
    }
}

// function validatePassword(){
//     if(password.value.trim()==""){
//         passerror.innerHTML="password cannot be empty"
//         passerror.style.color= "red"
//         return false
//     }
   
//     else if(!password.value.match(regexStrongpass )){
//         passerror,innerHTML="Strong password"
//         passerror.style.color="green"
//         return true
//     }
//     else{
//         return true
//     }
        
//     }
           
        


    let timeout;

    // traversing the DOM and getting the input and span using their IDs

 
    

    // The strong and weak password Regex pattern checker
    let password = document.getElementById("exampleInputPassword1");
    let passerror = document.getElementById("pass-error");
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{8,}))')
    
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

    // Adding an input event listener when a user types to the  password input 

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







    
    

function validateForm(){
    if(!validateName() || !StrengthChecker(PasswordParameter)){
        return false
    }
    else{
        return true
    }
}