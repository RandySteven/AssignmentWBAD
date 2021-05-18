class User {
    constructor(fullName, email, password){
        this.fullName = fullName,
        this.email = email,
        this.password = password
    }
}

var users = new Array();

function register(){
    var fullName = document.forms["registerForm"]["fullName"].value
    var email = document.forms["registerForm"]["email"].value
    var password = document.forms["registerForm"]["password"].value
    if(fullName === ""){
        document.getElementById('error').innerHTML = `
            <p>Document is undefined</p>
        `
        document.getElementById('error').style.color = 'red'
        return false
    }
    if(fullName.length < 5){
        document.getElementById('error').innerHTML = `
            <p>Full Name length must be more than 5</p>
        `
        document.getElementById('error').style.color = 'red'
        return false
    }
    if(email === ""){
        document.getElementById('error2').innerHTML = `
            <p>Document is undefined</p>
        `
        document.getElementById('error2').style.color = 'red'
        return false
    }
    if(email.length < 5){
        document.getElementById('error2').innerHTML = `
            <p>Email length must be more than 5</p>
        `
        document.getElementById('error2').style.color = 'red'
        return false
    }
    if(password === ""){
        document.getElementById('error3').innerHTML = `
            <p>Document is undefined</p>
        `
        document.getElementById('error3').style.color = 'red'
        return false
    }
    if(password.length < 5){
        document.getElementById('error3').innerHTML = `
            <p>Password length must more than 5</p>
        `
        document.getElementById('error3').style.color = 'red'
        return false
    }
    let user = new User(fullName, email, password)
    users.push({user:user})
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