const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    db.collection("Todos")
      .find //{ _id: new ObjectID("5b7977bc954238418450fc1e") }
      ()
      .count() //toArray()
      .then(
        docs => {
          console.log(`Todos count: ${docs}`);
          //console.log(JSON.stringify(docs, undefined, 4));
        },
        err => {
          console.log("Unable to fetch todos", err);
        }
      );

    client.close();
  }
);
