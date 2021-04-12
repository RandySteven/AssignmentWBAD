
function register(){
    var fullName = document.forms["registerForm"]["fullName"].value
    var email = document.forms["registerForm"]["email"].value
    var password = document.forms["registerForm"]["password"].value
    if(fullName.length < 5){
        alert("Full Name tidak boleh kurang dari 5")
        return false
    }
    if(email.length < 5){
        alert("Email tidak boleh kurang dari 5")
        return false
    }
    if(email.indexOf("@") !== -1){
        alert("Email tidak boleh kurang dari 5")
        return false
    }
}