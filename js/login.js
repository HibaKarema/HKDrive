let email = document.querySelector("#email")
let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let password = document.querySelector("#password")


let loginBtn = document.querySelector("#sign_in")

let getemail = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener ("click" , function(e){
    e.preventDefault()
    if (email.value==="" || password.value==="" || firstName.value==="" || lastName.value===""){
        alert("please fill data ")
    } else {
        if ( ((getemail && getemail.trim() === email.value.trim()) && (getPassword  === password.value ) ) )
        {
            localStorage.setItem("userName",firstName.value);
            setTimeout ( () => {
                window.location = "index.html"
            } , 1500)

        } else {
            alert("email or password is wrong")
        }
    }
})


