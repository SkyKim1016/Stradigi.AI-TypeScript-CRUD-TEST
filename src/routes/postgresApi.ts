import { Router, Request, Response, NextFunction} from 'express';

import { pool } from '../connectionDB/connectionPostgreSQL';
import { QueryResult } from 'pg';


const router = Router();



//* List  */
//* Crud */
//* Api */ 

// [Read List All]
router.get('/', async(req: Request, res: Response, next:NextFunction) => {
    // res.render('index');
    try{
        const queryResult : QueryResult = await pool.query('SELECT A.id, A.name, B.description, B.checked, B.listid  FROM lists A  LEFT JOIN items B ON A.id = B.listID  ORDER BY A.id ASC');
        res.status(200).json( queryResult.rows );
    }catch(error){
        res.send("Erorr : "+ error);
        console.log(error);
    }

});

// [Read List One]
router.get('/List/', async(req:Request, res:Response, next:NextFunction) => {
    try{
        const id : number = req.body.id;
        const queryResult : QueryResult = await pool.query('SELECT * FROM lists WHERE id = $1', [id]);
        res.status(200).json( queryResult.rows );

    }catch(error){
        next(error);
    }
});


// [Create List One]
router.post("/createList", async(req: Request, res: Response, next:NextFunction) => {
    try{

        let name: string = req.body.name;
        //[Cutting string length for 96 character ]
        name = name.substr(0,96);

        const queryResult : QueryResult = await pool.query('INSERT INTO lists (name) VALUES ($1)', [name]);
        console.log("MongoDB Query Output : " + queryResult);
        res.json({
            message: 'List Added successfully',
            body: {
                name: { name }
            }
        })


    }catch(error){
        next(error);
    }
});


// [Update List One]
router.patch('/updateList/', async(req: Request, res: Response, next:NextFunction) => {
    
    try{
        const id : number = req.body.id;
        const name : string = req.body.name
        
        const queryResult : QueryResult = await pool.query('UPDATE lists SET name = $1 WHERE id = $2', [
            name,
            id
        ]);

        res.status(200).json("Updated.");
    }catch(error){
        res.send("Erorr : "+ error);
        console.log(error);
    }

});

// [Delete List One]
router.delete('/deleteList/', async(req: Request, res: Response, next:NextFunction) => {
    // res.render('index');
   try{
        const id : number = req.body.id;
        const queryResult : QueryResult = await pool.query('DELETE FROM lists where id = $1', [
            id
        ]);
        res.sendStatus(200)
   }catch(error){
        next(error);
   }
});







//* Item  */
//* Crud */
//* Api */ 

// [Read Item All]
router.get('/ItemAll', async(req: Request, res: Response, next:NextFunction) => {
    // res.render('index');
    try{
        const queryResult : QueryResult = await pool.query('SELECT * FROM items');
        res.status(200).json( queryResult.rows );
    }catch(error){
        next(error);
    }
    
  
});

// [Read Item One]
router.get('/Item', async(req:Request, res:Response, next:NextFunction) => {
    try{
        const id : number = req.body.id;
        const queryResult : QueryResult = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
        res.status(200).json( queryResult.rows );
    }catch(error){
        next(error);
    }
});


// [Create Item One]
router.post("/createItem", async(req: Request, res: Response, next:NextFunction) => {
    // res.render('index');
    try{

        const listID:number = req.body.listID;
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
        const queryResult : QueryResult = await pool.query('INSERT INTO items (description, checked, listid) VALUES ($1, $2, $3)', [description, checked, listID]);
        
        console.log("MongoDB Query Output : " + queryResult);
        res.sendStatus(200)

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
        let description:string = req.body.description;
        const checked:boolean = req.body.checked;

           //[Cutting string length for 96 character ]
           description = description.substr(0.96);

           //[Checking boolean type]
           if(typeof checked !== 'boolean'){
               res.send("Check type is [ '" + typeof checked + "' ] \n"+"Check type must input boolean type between 'true' or 'false' ." ) 
               return false;
               // console.log("!!! Error Reason :  Check type is [ '" + typeof check + "' ].  "+"Check type must input boolean type between 'true' or 'false'" );
               // throw new Error()
           }

           const queryResult : QueryResult = await pool.query('UPDATE items SET description = $1, checked=$2 WHERE id = $3', [
                description,
                checked,
                id
             ]);
        res.sendStatus(200).json("Updated.");

   }catch(error){
        next(error);
   }
});

// [Delete Item One]
router.delete('/deleteItem/', async(req: Request, res: Response, next:NextFunction) => {
    try{
        const id : number = req.body.id  ;
        const queryResult : QueryResult = await pool.query('DELETE FROM items where id = $1', [
            id
        ]);
        res.sendStatus(200);
    }catch(error){
        res.send("Erorr : "+ error);
        next(error)
    }
});



export default router;