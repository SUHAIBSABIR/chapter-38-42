import { auth, createUserWithEmailAndPassword } from "./firebase.js";


var btn = document.getElementById("btn")
var reg = () => {

    var email = document.getElementById("email")
    var password = document.getElementById("password")
    console.log(email.value)
    console.log(password.value)


    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            console.log("successfull---->", userCredential)
        })
        .catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorcode----->", errorCode)
            console.log("errormessage----->", errorMessage)
            // console.log("error---->" + error)
        }



        );
}

btn.addEventListener("click", reg)

