import { Router, Request, Response, NextFunction} from 'express';

import {  db } from '../connectionDB/connectionMongoDB';

const router = Router();



//* List  */
//* Crud */
//* Api */ 

// [Read List All]
router.get('/', async(req: Request, res: Response, next:NextFunction) => {
    // res.render('index');
    try{
        //const lists = await db.collection('list').find().toArray(); //Converts cursor to array


        //[Joining two collection Lists with Items ]
        const list : any = await db.collection('lists').aggregate([
            { $lookup:
                {
                  from: 'items',
                  localField: '_id',
                  foreignField: 'listID',
                  as: 'items'
                }
              }
        ]).toArray(function(err, result){
            if (err) throw err;

            const lists : Object = result;
            res.status(200).json( lists );
        });
    }catch(error){
        console.log(error);
        return res.status(500).json('Internal Server error');
    }

});

// [Read List One]
router.get('/List/', async(req:Request, res:Response, next:NextFunction) => {
    try{
        const id : number = req.body.id;
        const list : Object = await db.collection('lists').findOne({_id: id}) //Converts cursor to array
        res.json({ list })
    }catch(error){
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
});


// [Create List One]
router.post("/createList", async(req: Request, res: Response, next:NextFunction) => {
    try{

        let name: string = req.body.name;
        //[Cutting string length for 96 character ]
        name = name.substr(0,96);
       
        // [Index (Dcoument) count in Collection for auto increament of id   ]
        const documentCount = await db.collection('lists').countDocuments();
        console.log("Document count : " + documentCount)


        const list = await db.collection("lists").insertOne({_id:documentCount+1, name:name});
        console.log("MongoDB Query Output : " + list);
        res.sendStatus(200)


    }catch(error){
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
});


// [Update List One]
router.patch('/updateList/', async(req: Request, res: Response, next:NextFunction) => {
    
    try{
        const id : number = req.body.id;
        const name : string = req.body.name
        
        const item : Object = await db.collection("lists").findOneAndUpdate(
                { "_id" : id }, 
                {$set: 
                    {   
                        "name": name,
                    }
                }
    
            );
        res.sendStatus(200);
    }catch(error){

    }

});

// [Delete List One]
router.delete('/deleteList/', async(req: Request, res: Response, next:NextFunction) => {
    // res.render('index');
   try{
        const id : number = req.body.id;
        const item : Object = await db.collection("lists").deleteOne({"_id":+id});
        res.sendStatus(200);
   }catch(error){
        console.log(error);
        return res.status(500).json('Internal Server error');
   }
});







//* Item  */
//* Crud */
//* Api */ 

// [Read Item All]
router.get('/ItemAll', async(req: Request, res: Response, next:NextFunction) => {
    // res.render('index');
    try{
        const items : Object = await db.collection('items').find().toArray(); //Converts cursor to array
        res.json({ items })
    }catch(error){
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
    
  
});

// [Read Item One]
router.get('/Item', async(req:Request, res:Response, next:NextFunction) => {
    try{
        const id : number = req.body.id;
        const item : Object = await db.collection('items').findOne({id: id}) //Conv erts cursor to array
        res.json({ item })
    }catch(error){
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
});


// [Create Item One]
router.post("/createItem", async(req: Request, res: Response, next:NextFunction) => {
    // res.render('index');
    try{

        const listID:number = req.body.listID;
        let description:string = req.body.description;
        const checked:boolean = req.body.checked;

          // [Index (Dcoument) count in Collection for auto increament of id   ]
          const documentCount = await db.collection('items').countDocuments();
          console.log("Document count : " + documentCount)

        //[Cutting string length for 256 character ]
        description = description.substr(0.256);

        //[Checking boolean type]
        if(typeof checked !== 'boolean'){
            res.send("Check type is [ '" + typeof checked + "' ] \n"+"Check type must input boolean type between 'true' or 'false' ." ) 
            return false;
            // console.log("!!! Error Reason :  Check type is [ '" + typeof check + "' ].  "+"Check type must input boolean type between 'true' or 'false'" );
            // throw new Error()
        }

        const item : Object = await db.collection("items").insertOne({_id:documentCount+1, listID:listID, description:description, checked:checked});
        console.log("MongoDB Query Output : " + item);
        res.sendStatus(200);

    }catch(error){
        res.send("Erorr : "+ error);
        console.log(error);
    }
});


// [Update Item One]
router.patch('/updateItem/', async(req: Request, res: Response, next:NextFunction) => {
    // res.render('index');
   try{
        const id : number = req.body.id;
        const listID : number = req.body.listID;
        let description:string = req.body.description;
        const checked:boolean = req.body.checked;

           //[Cutting string length for 96 character ]
           description = description.substr(0,256);

           //[Checking boolean type]
           if(typeof checked !== 'boolean'){
               res.send("Check type is [ '" + typeof checked + "' ] \n"+"Check type must input boolean type between 'true' or 'false' ." ) 
               return false;
               // console.log("!!! Error Reason :  Check type is [ '" + typeof check + "' ].  "+"Check type must input boolean type between 'true' or 'false'" );
               // throw new Error()
           }

        const item : Object = await db.collection("items").findOneAndUpdate(
                { "_id" : id }, 
                {$set: 
                    {   
                        "description": description,
                        "checked": checked,
                    }
                }

            );
        res.sendStatus(200);

   }catch(error){
        console.log(error);
        return res.status(500).json('Internal Server error');
   }
});

// [Delete Item One]
router.delete('/deleteItem/', async(req: Request, res: Response, next:NextFunction) => {
    try{
        const id : number = req.body.id  ;
        const item : Object = await db.collection("items").deleteOne({"_id":+id});
        res.sendStatus(200);
    }catch(error){
        res.send("Erorr : "+ error);
        next(error)
    }
});



export default router;