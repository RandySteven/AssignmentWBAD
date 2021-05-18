class User {
    constructor(fullName, email, password){
        this.fullName = fullName,
        this.email = email,
        this.password = password
    }
}

var users = [];

var fullName = document.forms["registerForm"]["fullName"].value
var email = document.forms["registerForm"]["email"].value
var password = document.forms["registerForm"]["password"].value

function register(fullName, email, password){
    if(fullName === undefined){
        alert("Full Name tidak boleh kosong")
        return false
    }
    if(fullName.length < 5){
        alert("Full Name tidak boleh kurang dari 5")
        return false
    }
    if(email.length < 5){
        alert("Email tidak boleh kurang dari 5")
        return false
    }

    let user = new User(fullName, email, password)
    users.push(user)
}

console.log(users)

function index(){
    // var email = document.forms["loginForm"]["email"].value
    // var password = document.forms["loginForm"]["password"].value
    // for(let i = 0 ; i < users.length ; i++){
    //     if(email === users[i].email && password === users[i].password){
    //         fullName = users[i].fullName;
    //         console.log(fullName)
    //         return fullName
    //     }else{
    //         alert(`Users not find`)
    //         return false
    //     }
    // }
}