CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
  id INTEGER NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(200) NOT NULL,
  devoured BOOLEAN NOT NULL,
  timestamp TIME,
  PRIMARY KEY(id)
);

USE burgers_db;
UPDATE burgers
SET devoured BOOLEAN DEFAULT false;