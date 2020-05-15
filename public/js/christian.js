const logging = true
debug("Begin JS Load")
var firebase = require("firebase");

// import * as firebase from 'firebase/app'
// var firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
//     appId: process.env.REACT_APP_FIREBASE_APPID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
// }


const input = document.querySelector('#file')
debug(input)

input.addEventListener('change', getUploads)

function getUploads() {
    const files = input.files
    debug(files)
}




function debug(e) {
    if (logging === true)
        console.log(e)
}