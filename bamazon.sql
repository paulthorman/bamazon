DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
		item_id INTEGER(30) NOT NULL AUTO_INCREMENT,
        product_name VARCHAR(30) NOT NULL,
        department_name VARCHAR(30) NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        stock_quantity INTEGER(10) NOT NULL,
        PRIMARY KEY(item_id)
        );
        
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Griffin and Sabine", "Books", 16.20, 82);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "American Crew Fiber", "Haircare", 10.25, 103);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Speedminton S600", "Sports", 49.99, 23);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Swenyo Skurniture", "Home", 79.99, 14);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Cuisinart DCC-3200", "Home", 84.99, 60);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "JavaScript and JQuery", "Books", 29.99, 42);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Nike Tiempo '94", "Sports", 99.99, 7);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Branston Pickle", "Food", 7.99, 18);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Oliver by Theresa Giolzetti", "Home", 12.99, 23);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "The Trip", "DVD", 16.99, 87);