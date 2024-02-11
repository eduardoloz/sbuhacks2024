const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://eduardolozanonaranjo:NpddpsaUjkR8WbZN@volunteerproject.8ipe1u0.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('VolunteerProject');
    const peoples = database.collection('People');

    // Query
    const query = { name: 'Eduardo Lozano' };
    const people = await peoples.findOne(query);

    console.log(people);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);