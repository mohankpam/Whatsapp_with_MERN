// Importing resources
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher';
import cors from 'cors';
// App Config
const app = express()
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1243099",
    key: "e7e477d18d51f6a2c203",
    secret: "a516b3df583456c91599",
    cluster: "ap4",
    useTLS: true
  });

//Middleware
app.use(express.json());
app.use(cors());

//Database Config
const connection_url = 'mongodb+srv://admin:f0FVWZxXEBQ6dz7q@cluster0.w4vjv.mongodb.net/whatsappdb?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true    

});

//MongoDB
const db = mongoose.connection;

db.once('open', () => {
    console.log('DB is connected.');

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {
        console.log("A Change Occured as follows:", change);
        
        if(change.operationType === 'insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted', {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp:messageDetails.timestamp,
            });
        } else {
            console.log("Error triggering Pusher");
        }

    });
});

//API Routes
app.get('/', (req,res) => {
    res.status(200).send('Hello World!');
});

app.get('/messages/sync', (req,res) => {

    Messages.find((err, data) => {
        if(err){
            res.status(500).send(err);
        } else{
            res.status(200).send(data);
        }
    });
});


app.post('/messages/new', (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})



//Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));