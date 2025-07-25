const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://expenseTracker:WxXy6zpEKOXsiPbo@cluster0.b8fibtq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const expenseCollection = client.db('expenseTracker').collection('expenses');

    app.get('/expenses', async(req, res)=>{
        const result = await expenseCollection.find().toArray();
        res.send(result);
    })
    app.post('/expenses', async(req, res)=>{
        const expenseInfo = req.body;
        const result = await expenseCollection.insertOne(expenseInfo);
        res.send(result);
    })
    app.delete('/expenses/:id', async(req, res)=>{
      const id = req.params.id;
      const filter = {_id : new ObjectId(id)}
        const result = await expenseCollection.deleteOne(filter);
        res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, ()=>{
    console.log(`Running at port ${port}`);
})