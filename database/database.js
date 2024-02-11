
// // Follow this pattern to import other Firebase services
// // import { } from 'firebase/<service>';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain:  process.env.authDomain,
//   databaseURL: process.env.databaseURL,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId,
//   measurementId: process.env.measurementId
// };

// const { initializeApp } = require('firebase/app');
// const { getFirestore, collection, getDocs } = require('firebase/firestore/lite');
// const { default: test } = require('node:test');

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);


// async function fetchDataForOpportunities(db) {
//     const citiesCol = collection(db, 'Opportunities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   // console.log(cityList);
//   return cityList;
//   };

//   async function fetchDataForuserId(db) {
//     const citiesCol = collection(db, 'userId');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   console.log(cityList);
//   return cityList;
//   };

//   async function fetchDataFordonation_institutions(db) {
//     const citiesCol = collection(db, 'donation_institutions');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   console.log(cityList);
//   return cityList;
//   };

//   async function fetchDataForUser(db) {
//     const citiesCol = collection(db, 'User');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   console.log(cityList);
//   return cityList;
//   };
// // const user = JSON.parse(fetchDataForOpportunities(db));
// // console.log(user);
  
//   async function fetchData() {
//     try {
//       const data = await fetchDataForOpportunities(db); // Assuming this function returns a Promise
//       // console.log(data); // Log the fetched data
//     } catch (error) {
//       console.error('Error fetching data:', error); // Handle any errors
//     }
//     return;
//   }
  
//   const json = fetchData();
//   console.log(json); // Log the fetched data

//   // Example JSON string
// const jsonString = fetchData();

// // Parse the JSON string into a JavaScript object
// const data = jsonString;

// // Separate the properties into different variables
// const name = json.distance;
// const age = data.name;
// const city = data.numberOfApplicants;

// // Print the values of the variables
// console.log(name); // Output: John
// // console.log(age); // Output: 30
// // console.log(city); // Output: New York
// // console.log(jsonString); // Log the fetched data



  
// // console.log(fetchDataForOpportunities(db));
// // console.log(fetchDataForuserId(db));
// // console.log(fetchDataFordonation_institutions(db));
// // console.log(fetchDataForUser(db));

