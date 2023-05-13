const {
    MongoClient,
    ServerApiVersion
} = require('mongodb');
var uri = "mongodb+srv://poortimaheshwari0299:Admin@cluster0.foowgvg.mongodb.net/Student?retryWrites=true&w=majority";

async function findAll(req, res, next) {
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    var dbo = client.db("Student");
    var collection = dbo.collection("StudentDetails");
    await collection.find().toArray().then(result => res.send(JSON.stringify(result))).catch((err) => {
        console.log(err);
        res.send(err);
    });

}

async function create(req, res, next) {
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    var dbo = client.db("Student");
    var myobj = req.body;
    await dbo.collection("StudentDetails").insertOne(myobj, function(err, res) {
        if (err) throw err;
        res.send(JSON.stringify(res));
        console.log("1 document inserted");
        db.close();
    });
    res.send("Some Error Occurred");
}

module.exports = {
    create,
    findAll
}