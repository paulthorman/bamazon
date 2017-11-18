DROP DATABASE IF EXISTS Bamazon;
CREATE DATABASE Bamazon;

USE Bamazon;

DROP TABLE IF EXISTS Products;

CREATE TABLE Products (
itemID INT(15) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50),
department_name VARCHAR(100),
price DECIMAL(10,2) DEFAULT NULL,
stock_quantity INT(10) DEFAULT NULL,
PRIMARY KEY(itemID)
);

DROP TABLE Products;

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES ("Griffin and Sabine", "Books", 16.20, 82), 
       ("American Crew Fiber", "Haircare", 10.25, 103),
       ("Speedminton S600", "Sports", 49.99, 23),
	   ("Swenyo Skurniture", "Home", 79.99, 14),
	   ("Cuisinart DCC-3200", "Home", 84.99, 60),
	   ("JavaScript and JQuery", "Books", 29.99, 42),
       ("Nike Tiempo '94", "Sports", 99.99, 7),
	   ("Branston Pickle", "Food", 7.99, 18),
	   ("Oliver by Theresa Giolzetti", "Home", 12.99, 23),
       ("The Trip", "DVD", 16.99, 87);