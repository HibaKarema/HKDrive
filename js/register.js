let email = document.querySelector("#email")
let password = document.querySelector("#password")

let register_btn = document.querySelector("#sign_up")

register_btn.addEventListener ("click" , function (e){
    e.preventDefault()
    if ( email.value==="" || password.value ===""){
        alert("please fill data")
    } else if(password.value.length <8){
            alert("password must be at least 8 characters");
    }else{
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value); 
        setTimeout ( () => {
            window.location = "login.html"
        } , 1500)
    }
})

