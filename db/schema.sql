\c postgres;
DROP DATABASE IF EXISTS bucketlist;
CREATE DATABASE bucketlist;

\c bucketlist;

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL, 
    email VARCHAR(255) NOT NULL UNIQUE, 
    password VARCHAR(255) NOT NULL
);

CREATE TABLE location ( 
    id SERIAL PRIMARY KEY, 
    location VARCHAR(255) NOT NULL, 
    description VARCHAR(255) NOT NULL, 
    due_date VARCHAR(255) NOT NULL, 
    user_id INTEGER, 
    FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE
);
