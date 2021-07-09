// import mongoose from 'mongoose';
import{ MongoClient,  Db } from 'mongodb';

let url:string = "mongodb://localhost:27017";

//Database name
const DefaultDB = "todoApp";

//Create a new MongoCLient
const client = new MongoClient(url, 
    //{loggerLevel: 'debug' }
);

export let db:Db;

export const MongoDBconnect = async(dbName:string = DefaultDB) =>{
    try{
         //Use connect method to coonect to the server
        const conn = await client.connect();
        db = conn.db(dbName);

        // const queryResult = JSON.stringify(conn) 
        return client;
        
    }catch(error){;
        console.log('<<Error>>'+error);
    }
   
};



// 2. Second way
// export async function MongoDBconnect() {
//     try {
//         // await mongoose.connect('mongodb://localhost/todo-list', {
//         //     useNewUrlParser: true
//         // });
//          //[Connect MongoDB without Mongoose]
//          const client = await MongoClient.connect(url);
//          //[Connect to database ]
//         console.log('>>> Connected Mongodb Database');

//         return client.db('TodoLst');
//     }
//     catch {
//         console.log('Error');
//     }
// }

