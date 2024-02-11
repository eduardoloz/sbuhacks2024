
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://eduardolozanonaranjo:NpddpsaUjkR8WbZN@volunteerproject.8ipe1u0.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri)

async function connectToMongo() {
  try {
      await client.connect();
      console.log("Connected to MongoDB");
      const admin = client.db().admin();
      const dbInfo = await admin.listDatabases();
      for (const db of dbInfo.databases) {
        console.log(db.name);
      }
  } catch (e) {
      console.error("Could not connect to MongoDB", e);
  }
}

async function disconnectFromMongo() {
  try {
    await client.close();
    console.log("Disconnected from MongoDB");
  } catch (e) {
    console.error("Could not disconnect from MongoDB", e);
  }
}

async function addPerson(name, hours, events, followers) {
  const database = client.db('VolunteerProject');
  const people = database.collection('People');
  const result = await people.insertOne({name: name, hours: hours, events: events, followers: followers});
  console.log(`New person created with the following id: ${result.insertedId}`);
}

async function getPeople() {
  const database = client.db('VolunteerProject');
  const people = database.collection('People');
  const query = {};
  const peopleList = await people.find(query).toArray();
  return peopleList;
}

async function getTopVolunteers() {
  const database = client.db('VolunteerProject');
  const people = database.collection('People');
  const topPeoples = await people.find({})
  .sort({ hours: -1 }) // Sort in descending order by hours
  .limit(10) // Limit the result to top 10
  .toArray(); // Convert to array
  console.log(topPeoples);
  return topPeoples;
}


export { connectToMongo, disconnectFromMongo, addPerson, getPeople, getTopVolunteers};