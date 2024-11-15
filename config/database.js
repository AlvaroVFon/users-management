import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const {MONGO_URI, MONGO_DB} = process.env;

console.log(MONGO_URI, MONGO_DB);

async function dbConnect() {
    const client = new MongoClient(MONGO_URI);
    try {
        await client.connect();
        console.log('Connected to the database');
        return client.db(MONGO_DB);
    } catch (error) {
        console.error(error);
    }
}

async function getDocuments(collectionName) {
    const db = await dbConnect();
    const collection = db.collection(collectionName);
    const documents = await collection.find({}).toArray();
    console.log(documents);
}

async function queryCollection(collectionName, query) {
    const db = await dbConnect();
    const collection = db.collection(collectionName);
    const documents = await collection.find(query).toArray();
    console.log(documents);
}

async function duplicateCollection(collectionName) {
    const db = await dbConnect();
    const collection = db.collection(collectionName);
    await collection.aggregate([
        {
            $match: {}
        },
        {
            $out: `${collectionName}_copy`
        }
    ])
}

export {dbConnect, getDocuments, queryCollection, duplicateCollection};

