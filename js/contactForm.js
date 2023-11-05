// ---------------------------contact-us Forms ------------------------
const form = document.getElementById("contactForm");
const alert = document.querySelector(".alert");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiIT7QmHfRcQnACWSrLdeoWs6k1Wv8c_U",
    authDomain: "it-finisher-training-centre.firebaseapp.com",
    databaseURL: "https://it-finisher-training-centre-default-rtdb.firebaseio.com",
    projectId: "it-finisher-training-centre",
    storageBucket: "it-finisher-training-centre.appspot.com",
    messagingSenderId: "288743415064",
    appId: "1:288743415064:web:24d1d8fa2f0806c69b526d",
    measurementId: "G-1Z4K8YX898"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const ref = database.ref("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  // const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const message = document.getElementById("message").value;



  ref.push({
    name: name,
    // email: email,
    phone: phone,
    message: message,
    timestamp: firebase.database.ServerValue.TIMESTAMP,

  });



  alert.style.display = "block";

  setTimeout(() => {
    alert.style.display = "none"; // Hide the alert after a delay
    form.reset(); // Reset the form after the delay
  }, 3000);
});
