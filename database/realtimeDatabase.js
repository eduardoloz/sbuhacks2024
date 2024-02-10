const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite');
// const { getDatabase } = require("firebase/database");
const { getDatabase, ref, set, onValue, child, get } = require("firebase/database");


const firebaseConfig = {
  
  databaseURL: "https://sbuhacks-f2397-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
// var database2 = firebase.database();

writeUserData("MarcosPaAc", "Marcos Pd", "sbu@gmail.com", null);


function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

// const dbRef = ref(getDatabase());
// dbRef.child("users").child(userId).get().then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK with service account credentials
// const serviceAccount = require('./path/to/sbuhacks-f2397-default-rtdb-export.json'); // Path to your service account key JSON file
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://sbuhacks-f2397-default-rtdb.firebaseio.com",
// });

// // Get a reference to the Firebase Realtime Database
// const db = admin.database();
// const dbRef = db.ref("users/" + userId); // Construct the reference to the specific user

// // Retrieve data from the database
// dbRef.once("value", (snapshot) => {
//   const userData = snapshot.val();
//   console.log(userData);
// }).catch((error) => {
//   console.error("Error fetching data:", error);
// });

