
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


connectToMongo();


try{
  addPerson('Julia Martin', 1205, 42, 4742043);
  addPerson('Charlie Miller', 1070, 282, 5985972);
  addPerson('Frank Lopez', 1786, 243, 3923529);
  addPerson('Tina White', 1830, 249, 4980174);
  addPerson('Liam Hernandez', 1126, 211, 4543154);
  addPerson('Grace Anderson', 754, 156, 1906778);
  addPerson('Vince Jones', 1770, 155, 8614337);
  addPerson('Tina Taylor', 30, 294, 4542128);
  addPerson('Olivia Brown', 575, 98, 5894062);
  addPerson('Liam Brown', 333, 132, 5755159);
  addPerson('Kevin Lopez', 792, 136, 6537960);
} catch (e) {
  console.error(":(",e);
}




