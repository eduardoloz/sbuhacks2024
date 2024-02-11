// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
const { getStorage } = require ('firebase/storage');
const { getAnalytics } = require ('firebase/analytics');
const { getDatabase } = require ('firebase/database');
const { getFirestore, doc, setDoc } = ('firebase/firestore');
const {firestore} = require ("firebase");



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain:  process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};
const app = initializeApp(firebaseConfig);
const collectionRef = firestore.collection('userId');


async function setD(app) {
await setDoc(doc(app, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });
};

// Initialize Firebase
const cityRef = doc(app, 'cities', 'BJ');
setD(cityRef, { capital: true }, { merge: true });
const analytics = getAnalytics(app);
const storage = getStorage(app);
const realtimeDatabase = getDatabase();
const database = getDatabase(app);


// Create our initial doc
app.collection("users").doc("frank").set({
    name: "Frank",
    favorites: {
      food: "Pizza",
      color: "Blue",
      subject: "Recess"
    },
    age: 12
  }).then(function() {
    console.log("Frank created");
  });
  
  // Update the doc without using dot notation.
  // Notice the map value for favorites.
  app.collection("users").doc("frank").update({
    favorites: {
      food: "Ice Cream"
    }
  }).then(function() {
    console.log("Frank food updated");
  });

  
  /*
  Ending State, favorite.color and favorite.subject are no longer present:
  /users
      /frank
          {
              name: "Frank",
              favorites: {
                  food: "Ice Cream",
              },
              age: 12
          }
   */

