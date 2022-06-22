const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email")
const repassword = document.getElementById("repassword");

let inputArray = [username, email, password, repassword];


// showing error
function error(input, message) {
    input.className = "form-control is-invalid";
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback";
}

// showing valid
function success(input) {
    input.className = "form-control is-valid";
}


form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    checkingRequired(inputArray);
    checkingLength(username,6,15);
    checkingLength(password,8,15);
    checkingPasswordAndRepassword(password, repassword);
})

function checkingRequired(inputs){
    inputs.forEach(function(input) {
        if(input.value === ""){
            error(input, `${input.id} is a required space!!!`)
        }else{
            success(input)
        }
    });
}

// if repassword is not equal password, ...
function checkingPasswordAndRepassword(pass, repass){
    if(pass.value != repass.value){
        error(repass, "password does not match");
    }
}

// check data length
function checkingLength(input, min, max){
    if(input.value.length < min){
        error(input, `${input.id} must be at least ${min} characters.`);
    }else if(input.value.length > max){
        error(input, `${input.id} must be no more than ${max} characters.`);
    }else{
        success(input);
    }
}