// ---------------------------Payments Forms ------------------------
const form = document.getElementById("paymentForm");
const alert = document.querySelector(".alert");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiIT7QmHfRcQnACWSrLdeoWs6k1Wv8c_U",
  authDomain: "it-finisher-training-centre.firebaseapp.com",
  databaseURL: "https://it-finisher-training-centre-default-rtdb.firebaseio.com",
  projectId: "it-finisher-training-centre",
  storageBucket: "it-finisher-training-centre.appspot.com",
  messagingSenderId: "288743415064",
  appId: "1:288743415064:web:e49523088affea7a9b526d",
  measurementId: "G-KS1HB3BN14"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const ref = database.ref("paymentDetails");


form.addEventListener("submit", (e) => {
  e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const upiid = document.getElementById("upi-id").value;



  ref.push({
    name: name,
    phone: phone,
    email: email,
    upiid:upiid,
    timestamp: firebase.database.ServerValue.TIMESTAMP,

  });



  alert.style.display = "block"; // Display the alert

  // After the first 10 seconds
  setTimeout(() => {
    alert.style.display = "none"; // Hide the alert
    form.reset(); // Reset the form
    // Redirect to the specified URL
    // window.location.href = "http://www.itfinisher.com";
    const phoneNumber = "+919795298080";
    const message = "Hi, I have bought your course. How do I get access?";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
  }, 5000);
  

});


