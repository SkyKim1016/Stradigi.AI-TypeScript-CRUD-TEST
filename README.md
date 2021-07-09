# Typescript Nodejs Mongodb , PostgreSQL CRUD REST API 

<img width="1675" alt="Screen Shot 2021-07-09 at 1 17 19 AM" src="https://user-images.githubusercontent.com/24449487/125030806-b2b74b00-e059-11eb-8940-126ff4f661b1.png">


# Installation
```bash
1. npm install --save-dev

2. npm run start
```

# Folder Structure


── ( connectionDB )

│ ── connectionMongoDB.ts 

│ ── connectionPostgres.ts

│ ── InitialScript_Postgres.sql

├── ( routes ) 
│
│   ├── mongoApi.ts
│
│   ├── postgresApi.ts
│
├── app.ts
│
├── index.ts
│
├── package.json
│
└── tsconfig.js
  


# Explain

# [1] For switchable MongoDB and PostgresSQL, It seperated route API by two route.  There are two route API files. 



 # (1) MongoAPI is for MongoDB. and URL is start "/mongoApi". therefore MongoAPI urls are 
  
      [Read List All]    HTTP://localhost:4000/mongoAPI 
      
      [Read List One]    HTTP://localhost:4000/mongoAPI/List
      
      [Create List One]  HTTP://localhost:4000/mongoAPI/createList
      
      [Update List One]  HTTP://localhost:4000/mongoAPI/updateList
      
      [Delete List One] HTTP://localhost:4000/mongoAPI/deleteList
      
      
      [Read Items All]    HTTP://localhost:4000/mongoAPI/ItemAll
      
      [Read Item One]    HTTP://localhost:4000/mongoAPI/Item
      
      [Create Item One]  HTTP://localhost:4000/mongoAPI/createItem
      
      [Update Item One]  HTTP://localhost:4000/mongoAPI/updateItem
      
      [Delete Item One] HTTP://localhost:4000/mongoAPI/deleteItem
      
      
  
  # (2) PostgresAPI is for PostgreSQL and URL is start "/postgresApi"
  
      
      [Read List All]    HTTP://localhost:4000/postgresApi 
      
      [Read List One]    HTTP://localhost:4000/postgresApi/List
      
      [Create List One]  HTTP://localhost:4000/postgresApi/createList
      
      [Update List One]  HTTP://localhost:4000/postgresApi/updateList
      
      [Delete List One] HTTP://localhost:4000/postgresApi/deleteList
      
      
      [Read Items All]    HTTP://localhost:4000/postgresApi/ItemAll
      
      [Read Item One]    HTTP://localhost:4000/postgresApi/Item
      
      [Create Item One]  HTTP://localhost:4000/postgresApi/createItem
      
      [Update Item One]  HTTP://localhost:4000/postgresApi/updateItem
      
      [Delete Item One] HTTP://localhost:4000/postgresApi/deleteItem
