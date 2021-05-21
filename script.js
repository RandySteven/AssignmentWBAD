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
    let validation1, validation2, validation3, validation4, validation5, validation6
    if(fullName === ""){
        document.getElementById('error').innerHTML = `
            <p>Document is undefined</p>
        `
        document.getElementById('error').style.color = 'red'
        validation1 = false;
    }
    if(fullName.length < 5){
        document.getElementById('error').innerHTML = `
            <p>Full Name length must be more than 5</p>
        `
        document.getElementById('error').style.color = 'red'
        validation2 = false;
    }
    if(email === ""){
        document.getElementById('error2').innerHTML = `
            <p>Document is undefined</p>
        `
        document.getElementById('error2').style.color = 'red'
        validation3 = false;
    }
    if(email.length < 5){
        document.getElementById('error2').innerHTML = `
            <p>Email length must be more than 5</p>
        `
        document.getElementById('error2').style.color = 'red'
        validation4 = false;
    }
    if(password === ""){
        document.getElementById('error3').innerHTML = `
            <p>Document is undefined</p>
        `
        document.getElementById('error3').style.color = 'red'
        validation5 = false;
    }
    if(password.length < 5){
        document.getElementById('error3').innerHTML = `
            <p>Password length must more than 5</p>
        `
        document.getElementById('error3').style.color = 'red'
        validation6 = false;
    }
    if(validation1 == false && validation2 == false && validation3 == false
        && validation4 == false && validation5 == false && validation6 == false){
            return false;
        }
    else{
        user = new User(fullName, email, password);
        users.push(user)
        return true
    }
    // let user = new User(fullName, email, password)
    // users.push(user)
}

console.log(users)

function index(){
    var email = document.forms["loginForm"]["email"].value
    var password = document.forms["loginForm"]["password"].value
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
    for(let i = 0 ; i < users.length ; i++){
        if(email === users[i].email && password === users[i].password){
            fullName = users[i].fullName;
        }else{
            document.getElementById('errorMessage').innerHTML = `
                <p>User not found</p>
            `
            return false
        }
    }
}
const api = 'https://covid19.mathdro.id/api'

fetch(api)
    .then((res) => res.json())
    .then((res) => {
        const datas = res;
        const getData = document.getElementById('data')
        getData.innerHTML = showCovidDatas(datas)
    })
    .catch((error) => {
        console.log(error)
    })

const showCovidDatas = (datas) => {
    let rawat = datas.confirmed.value + datas.recovered.value + datas.deaths.value
    return `
    <div class="text-center">
        <div class="covid">
            <h1>Jumlah Kasus</h1>
            <h2 class="count text-blue">${rawat}</h2>
        </div>
        <div class="container_data">
            <div class="data">
                <h1>Positive</h1>
                <h2 class="count text-yellow">${datas.confirmed.value}</h2>
            </div>
            <div class="data">
                <h1>Recovered</h1>
                <h2 class="count text-green">${datas.recovered.value}</h2>
            </div>
            <div class="data">
                <h1>Death</h1>
                <h2 class="count text-red">${datas.deaths.value}</h2>
            </div>
        </div>
    </div>`
}

const apiProvince = 'https://indonesia-covid-19.mathdro.id/api/provinsi'

fetch(apiProvince)
    .then(res => res.json())
    .then(res => {
        const provinces = res.data;
        let getProvince = document.getElementById('provinces');
        let datas = ""
        provinces.forEach(province => {
            datas += showProvincesData(province);
        });
        getProvince.innerHTML = datas;
    })
    .catch((error)=>{
        console.log(error)
    });


const showProvincesData = (province) => {
    return  `<div class="masonry-grid__item text-center">
                <h2>${province.provinsi}</h2>
                <table class="text-center centerlization">
                    <tr  style="border:1px solid black;">
                        <td class="count"><b class="text-yellow">${province.kasusPosi}</b></td>
                        <td>Positive</td>
                    </tr>
                    <tr  style="border:1px solid black;">
                        <td class="count"><b class="text-green">${province.kasusSemb}</b></td>
                        <td>Recovered</td>
                    </tr>
                    <tr  style="border:1px solid black;">
                        <td class="count"><b class="text-red">${province.kasusMeni}</b></td>
                        <td>Death</td>
                    </tr>
                </table>
            </div>
            `;
}

