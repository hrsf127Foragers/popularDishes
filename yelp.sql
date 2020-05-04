
DROP DATABASE IF EXISTS yelp;

CREATE DATABASE yelp;

USE yelp;

CREATE TABLE users
(
  id int AUTO_INCREMENT NOT NULL,
  userName varchar (150) NOT NULL,
  avatar TEXT NOT NULL,
  numOfReviews int NOT NULL,
  followers int NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE restaurants
(
  id INT AUTO_INCREMENT NOT NULL,
  names varchar (150) NOT NULL,
  cuisine varchar(150) NOT NULL,
  PRIMARY KEY (ID)
);



CREATE TABLE populardishes
(
  id int AUTO_INCREMENT NOT NULL,
  dish varchar (150) NOT NULL,
  id_restaurants INT NOT NULL,
  PRIMARY KEY(ID),
  FOREIGN KEY (id_restaurants) REFERENCES restaurants(id)
);
CREATE TABLE pictures
(
  id int AUTO_INCREMENT NOT NULL,
  caption varchar (255) NOT NULL,
  images  TEXT NOT NULL,
  id_populardishes int NOT NULL,
  PRIMARY KEY(ID),
  FOREIGN KEY (id_populardishes) REFERENCES populardishes(id)
);

CREATE TABLE reviews
(
  id int NOT NULL AUTO_INCREMENT,
  review TEXT NOT NULL,
  dates varchar (10) NOT NULL,
  stars int NOT NULL,
  id_populardishes int NOT NULL,
  id_users int NOT NULL,
  PRIMARY KEY(ID),
  FOREIGN KEY (id_users) REFERENCES users(id),
  FOREIGN KEY (id_populardishes) REFERENCES populardishes(id)
);


-- ---
-- Foreign Keys
-- ---

-- ALTER TABLE `pictures` ADD FOREIGN KEY (id_populardishes) REFERENCES `populardishes` (`id`);
-- ALTER TABLE `reviews` ADD FOREIGN KEY (id_populardishes) REFERENCES `populardishes` (`id`);
-- ALTER TABLE `reviews`ADD FOREIGN KEY(id_users) REFERENCES `users`(`id`);
-- ALTER TABLE `populardishes` ADD FOREIGN KEY (id_restaurants) REFERENCES `restaurants` (`id`);

