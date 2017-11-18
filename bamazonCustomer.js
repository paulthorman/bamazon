// Dependencies
var prompt = require("prompt");
var inquirer = require ("inquirer");
var mysql = require ("mysql");
var colors = require ("colors");
var Table = require("cli-table");

// Get connected to my database in MySQL
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "Bamazon"
});

connection.connect(function(err){
    if(err) throw err;
    // console.log("Connected as " + connection.threadId);
    startBuying();
    // endConnection();
})

// Prints the items in the database using the table npm package
function printTable(res) {
    var table = new Table ({
        head: ["Item ID", "Product Name", "Department", "Cost", "Stock"],
        colWidths: [10, 45, 40, 8, 8]
    });

    for (var i = 0; i < res.length; i++){
        table.push([res[i].itemID, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
    }
    console.log(table.toString());
}

// Allows the user to start their purchases
var startBuying = function() {
    connection.query("SELECT * FROM Products", function (err, res){
        
        console.log(" ------------ Bamazon's Inventory ------------ ".italic);

        printTable(res);
        var productsArray = [];
        for (var i = 0; i < res.length; i++) {
            productsArray.push(res[i].product_name);
        }

        inquirer.prompt([{
            name: "item",
            type: "input",
            message: "Which item would you like to purchase? (Please enter the Item ID)"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?"

        }]).then(function(answer){
            // console.log(answer);
            
            var itemID = answer.item;
            // console.log(itemID);

            var chosenItem = res[itemID-1];
            console.log(chosenItem);

            var newQuantity = chosenItem.stock_quantity - answer.quantity;

            if (newQuantity >= 0) {
                console.log("Bamazon's Inventory has enough of your desired item (".cyan + itemID + ")!".cyan);
                console.log("Quantity in Stock: ".magenta + itemID + " Order Quantity: ".magenta + answer.quantity);
                console.log("Updating inventory. Thank you for shopping at Bamazon!".yellow);
                
                connection.query("UPDATE Products SET ? WHERE itemID = ?", [{stock_quantity: newQuantity}, itemID]);
                
                startBuying();
            } else {
                console.log(" ------------ There are not enough items in stock for you to make that purchase. ------------ ");
                endConnection();

            }
        })
    })
}

function endConnection(){
    connection.end();
}