var firebaseConfig = {
    apiKey: "AIzaSyDvOYF8c2UVbtl_k_BtvNqrCFpfxMGd9FQ",
    authDomain: "kwitterproject-71f79.firebaseapp.com",
    projectId: "kwitterproject-71f79",
    storageBucket: "kwitterproject-71f79.appspot.com",
    messagingSenderId: "920859852624",
    appId: "1:920859852624:web:653c5af06407eed0593655",
    measurementId: "G-YMPK3NX6C1"
  };
  firebase.initializeApp(firebaseConfig);

var username=localStorage.getItem("Username");
document.getElementById("username").innerHTML="Welcome "+username+"!";
