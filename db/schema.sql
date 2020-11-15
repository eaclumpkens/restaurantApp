DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int auto_increment NOT NULL,
    burger_name VARCHAR(50),
    devoured BOOLEAN default false,
    PRIMARY KEY (id)
);