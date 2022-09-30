drop database if exists chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT(11) auto_increment,
  username VARCHAR(25) not null,
  PRIMARY KEY (id)
  );

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT(11) auto_increment,
  msg_text VARCHAR(255),
  user_id INT(11),
  roomname VARCHAR(255),
  FOREIGN KEY (user_id) REFERENCES users(id),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

