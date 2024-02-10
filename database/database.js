
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    projectId: "sbuhacks-f2397",
    databaseURL: "https://sbuhacks-f2397-default-rtdb.firebaseio.com",
};

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite');
const { default: test } = require('node:test');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


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
// const user = JSON.parse(fetchDataForOpportunities(db));
// console.log(user);
  
  async function fetchData() {
    try {
      const data = await fetchDataForOpportunities(db); // Assuming this function returns a Promise
      console.log(data); // Log the fetched data
    } catch (error) {
      console.error('Error fetching data:', error); // Handle any errors
    }
    return data;
  }
  
  const data = fetchData();
  console.log(data); // Log the fetched data





  
// console.log(fetchDataForOpportunities(db));
// console.log(fetchDataForuserId(db));
// console.log(fetchDataFordonation_institutions(db));
// console.log(fetchDataForUser(db));

