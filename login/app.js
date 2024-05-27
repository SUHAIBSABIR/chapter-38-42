import { auth, signInWithEmailAndPassword } from "./firebase.js"


var btn = document.getElementById("btn")
var login = () => {

    var email = document.getElementById("email")
    var password = document.getElementById("password")

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("userlogin successfully")

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });



}

btn.addEventListener("click", login)