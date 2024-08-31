

function validate(){
    let email = document.getElementById('email').value
    if(email == "" ){
        alert("email can't be left blank")
        return false
    }

    let password = document.getElementById('password').value
    if(password.length<8){
        alert("Password must contain atleast 8 characters!")
        return false
    }
}
