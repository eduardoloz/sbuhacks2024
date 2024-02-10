
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    projectId: "sbuhacks-f2397",
};
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite');
const { default: test } = require('node:test');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'Opportunities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
async function fetchDataForOpportunities(db) {
    const citiesCol = collection(db, 'Opportunities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList);
  return cityList;
  };

  async function fetchDataForuserId(db) {
    const citiesCol = collection(db, 'userId');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList);
  return cityList;
  };

  async function fetchDataFordonation_institutions(db) {
    const citiesCol = collection(db, 'donation_institutions');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList);
  return cityList;
  };

  async function fetchDataForUser(db) {
    const citiesCol = collection(db, 'User');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList);
  return cityList;
  };

console.log(fetchDataForOpportunities(db));
console.log(fetchDataForuserId(db));
console.log(fetchDataFordonation_institutions(db));
console.log(fetchDataForUser(db));