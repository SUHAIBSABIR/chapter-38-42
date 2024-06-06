import { auth, createUserWithEmailAndPassword } from "./firebase1.js";


var btn = document.getElementById("btn")
var reg = () => {

    var email = document.getElementById("email")
    var password = document.getElementById("password")
    console.log(email.value)
    console.log(password.value)


    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            console.log("successfull---->", userCredential)
            var d = "operationType"
            console.log(userCredential[d])
            btn.style.display = "none"
            email.style.display = "none"
            password.style.display = "none"
            // window.location.href = "../alert/index.html"
            alert("you are signin successfuly")

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
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase.js";

var btn = document.getElementById("button")
var req = () => {
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    console.log(email.value, password.value)
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });




};





// btn.addEventListener("click", req)
