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
});

// prints the table just like the customer sees
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

// actually shows the inventory that is displayed in a table thanks to the function above
function showInventory(){
    connection.query("SELECT * FROM Products", function(err, inventory){
        if(err) throw err;
        console.log(" ------------ Bamazon's Inventory ------------ ");
        printTable(inventory);
    })
}

// manager is prompted with several choices on what they want to do
inquirer.prompt ([
    {
        type: "list",
        message: "Select an option",
        choices: ["View products on sale", "View low inventory", "Add inventory"],
        name: "selection"
    }
]).then(function(user){
    switch(user.selection) {
        case "View products on sale":
        showInventory();
        endConnection();
        break;

        case "View low inventory":
            connection.query("SELECT * FROM Products WHERE stock_quantity < 5", function (err, inventory){
                if(err) throw err;
                console.log(" ------------ Bamazon's Low Inventory ------------ ");
                printTable(inventory);
                endConnection();
            });
        break;

        case "Add inventory":
        inquirer.prompt ([
            {
                type: "input",
                message: "What is the itemID you would like to add to?",
                name: "itemID"
            },
            {
                type: "input",
                message: "How many of this item would you like to add?",
                name: "amount"
            }
        ]).then(function(request){
            connection.query("SELECT * FROM Products WHERE itemID=" + request.itemID, function(err, selectedItem){
                if(err) throw err;

                console.log("You have added ".magenta + request.amount + " " + selectedItem[0].product_name.magenta + "to inventory".magenta);

                connection.query("UPDATE Products SET stock_quantity =? WHERE itemID = ?", [selectedItem[0].stock_quantity + Number(request.amount), request.itemID],
                
                    function(err, inventory){
                        if(err) throw err;
                        showInventory(); // keeps showing the updated inventory
                        endConnection();
                    }
                )
            });
        });
        break;

    }// closes switch case
});// closes initial inquirer prompt

function endConnection(){
    connection.end();
}