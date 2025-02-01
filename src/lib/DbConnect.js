import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNamesObj = {
    servicesCollection: "test_services",
    userCollection: "test_user",
    bookingCollection: "test_booking"
}

export default function DbConnect(collectionName) {
  const uri = "mongodb+srv://CarDoctor:fxj4lUVCXgR1WgMR@cluster0.47f5u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  return client.db(CarDoctor).collection(collectionName)
}




// CarDoctor
// fxj4lUVCXgR1WgMR