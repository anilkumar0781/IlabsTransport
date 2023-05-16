function myfunc(event){
    let email = document.getElementById("email").value 
    let pass = document.getElementById("password").value

    var reg = ( /^[7-9] [0-9] {9}+$/ )|| ( /^[a-z] {!@#$%}+$/g )
    var result = reg.test(email)

    var reg1 = /^[0-9] {10}+$ /g
    var result1 = reg1.test(pass)
     event.preventDefault();

    if(result == "" && result1 == ""){
       alert(`email & password is accepted`)
    }
    else{
       alert(`email and password is not correct..`)
    }
}