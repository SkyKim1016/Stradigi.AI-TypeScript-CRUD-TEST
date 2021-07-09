# Typescript Nodejs Mongodb , PostgreSQL CRUD REST API 

<img width="1675" alt="Screen Shot 2021-07-09 at 1 17 19 AM" src="https://user-images.githubusercontent.com/24449487/125030806-b2b74b00-e059-11eb-8940-126ff4f661b1.png">


# Installation
```bash
1. npm install --save-dev

2. npm run start
```


# Explain

[1.] For switchable MongoDB and PostgresSQL, It seperated route API by two route 
There are two route API files. 



  (1) MongoAPI is for MongoDB. and URL is start "/mongoApi". therefore MongoAPI urls are 
  
      [Read List All]    HTTP://localhost:4000/mongoAPI 
      
      [Read List One]    HTTP://localhost:4000/mongoAPI/List
      
      [Create List One]  HTTP://localhost:4000/mongoAPI/createList
      
      [Update List One]  HTTP://localhost:4000/mongoAPI/updateList
      
      [Delete List One] HTTP://localhost:4000/mongoAPI/deleteList
      
      
      [Read Items All]    HTTP://localhost:4000/mongoAPI 
      
      [Read Item One]    HTTP://localhost:4000/mongoAPI/List
      
      [Create Item One]  HTTP://localhost:4000/mongoAPI/createList
      
      [Update Item One]  HTTP://localhost:4000/mongoAPI/updateList
      
      [Delete Item One] HTTP://localhost:4000/mongoAPI/deleteList
      
      
  
  (2) PostgresAPI is for PostgreSQL and URL is start "/postgresApi"
  
      [Read List All]    HTTP://localhost:4000/postgresApi 
      
      [Read List All]    HTTP://localhost:4000/postgresApi/List
      
      [Read List All]    HTTP://localhost:4000/postgresApi 
      
      [Read List All]    HTTP://localhost:4000/postgresApi 
      
      [Read List All]    HTTP://localhost:4000/postgresApi 
