/* [Installed Directory ]
/* Library/PostgreSQL/13 */ 

/* [Service start postgresql command] */
/* => brew services rtart postgresql */
/* cd /Library/PostgreSQL/13/ */

/* [PSQL enter command ] */
/* => sudo -u postgres psql */
/* => psql -U postgres -p 5432 -h localhost */



/* [ Please run bellow commands before run PostgresSQL CRUD API ]

/* [1. Create Datbase todoApp] */
CREATE DATABASE todoApp;

/* [2. Check DB] */
\l

/* [3. select DB] */
\c todoapp;

/* [4. Create table lists] */
CREATE TABLE lists(
    id SERIAL PRIMARY KEY,
    name VARCHAR(96)
);

/* [5. Insert sample data into lists table ] */
INSERT INTO lists (name) VALUES ('Henry');


/* [6. Create table items] */
CREATE TABLE items(
    id SERIAL PRIMARY KEY,
    description VARCHAR(256),
    checked boolean,
    listID integer  
);

/* [8. Insert smaple date into items table ] */
INSERT INTO items (description,checked,listID) VALUES ('This is description. I am loving Canada',true,1);


select * from lists;