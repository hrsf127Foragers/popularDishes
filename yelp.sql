
DROP DATABASE IF EXISTS yelp;

CREATE DATABASE yelp;

USE yelp;

CREATE TABLE restaurants
(
  id INTEGER AUTO_INCREMENT NOT NULL,
  names varchar (150) NOT NULL,
  cuisine varchar(150) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE pictures
(
  id int  AUTO_INCREMENT NOT NULL,
  caption varchar(255) NOT NULL,
  images  TEXT NOT NULL,
  id_populardishes int NOT NULL,
  PRIMARY KEY(ID)
);

CREATE TABLE reviews
(
  id int NOT NULL AUTO_INCREMENT,
  review TEXT NOT NULL,
  dates DATE NOT NULL,
  stars int NOT NULL,
  id_populardishes int NOT NULL,
  id_users int NOT NULL,
  PRIMARY KEY(ID)
);

CREATE TABLE populardishes
(
  id int
  AUTO_INCREMENT NOT NULL,
  dish varchar(150) NOT NULL,
  id_restaurants int NOT NULL,
  PRIMARY KEY(ID)
);

CREATE TABLE users
(
  id int AUTO_INCREMENT NOT NULL,
  userName varchar (150) NOT NULL,
  avatar TEXT NOT NULL,
  reviews TEXT NOT NULL,
  stars int NOT NULL,
  PRIMARY KEY (ID)
);
-- ---
-- Foreign Keys
-- ---

ALTER TABLE `pictures` ADD FOREIGN KEY (id_populardishes) REFERENCES `populardishes` (`id`);
ALTER TABLE `reviews` ADD FOREIGN KEY (id_populardishes) REFERENCES `populardishes` (`id`);
ALTER TABLE `reviews`ADD FOREIGN KEY(id_users) REFERENCES `users`(`id`);
ALTER TABLE `populardishes` ADD FOREIGN KEY (id_restaurants) REFERENCES `restaurants` (`id`);


-- ---
-- Test Data
-- ---


-- INSERT INTO `restaurants` (`name`) VALUES ('');
-- INSERT INTO `Pictures` (`id`,`caption`,`img`,`id_populardishes`) VALUES ('','','','');
-- INSERT INTO `reviews` (`id`,`text`,`date`,`stars`,`id_populardishes`,`users`) VALUES ('','','','','','');
-- INSERT INTO `populardishes` (`id`,`name`,`id_restaurants`) VALUES ('','','');