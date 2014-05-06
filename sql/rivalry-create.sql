CREATE DATABASE rivalry;

CREATE TABLE item
  (id SERIAL PRIMARY KEY,
   name VARCHAR(256) NOT NULL,
   CREATEd_date TIMESTAMP NOT NULL DEFAULT NOW());

CREATE TABLE artist
(id SERIAL PRIMARY KEY,
 first_name VARCHAR(256) NOT NULL,
 last_name VARCHAR (256),
 CREATEd_date TIMESTAMP NOT NULL DEFAULT NOW());
                                                                           
CREATE TABLE item_artist
(id SERIAL PRIMARY KEY,
 artist_id INTEGER NOT NULL,
 item_id INTEGER NOT NULL,
 CREATEd_date TIMESTAMP NOT NULL DEFAULT NOW());

CREATE TABLE catalog
(id SERIAL PRIMARY KEY ,
 issue_number INTEGER NOT NULL,
 issue_tag_line VARCHAR(520),
 theme_id INTEGER,
 CREATEd_date TIMESTAMP NOT NULL DEFAULT NOW());







