
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCPPnF1PcyEX84v40M3Miu3ln4GaZsmMGA",
    authDomain: "todo-app-a8f5b.firebaseapp.com",
    projectId: "todo-app-a8f5b",
    storageBucket: "todo-app-a8f5b.appspot.com",
    messagingSenderId: "456700770741",
    appId: "1:456700770741:web:b1dbad86d981cd20fc01fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth,
    createUserWithEmailAndPassword
}
