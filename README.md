# Bamazon

### Amazon-like storefront using MySQL, MySQL NPM Package, and Inquirer/Prompt NPM Package.

Application receives orders from customers and provides live inventory.

##### Initializing node BamazonCustomer.js in the command line brings up the storefront:

![Screenshot](/images/buy_product.png)

The app will then prompt which product you'd like to purchase by item number and quantity required.

If enough stock exists, then it will adjust the quantities and continue.

![Screenshot](/images/product_purchase.png)

If there are not enough of that item or too many are requested, an out of stock message will occur.

![Screenshot](/images/purchase_error.png)

##### Initializing node BamazonManager.js in the command line prompts options for the manager:
    * View products on sale
    * View low inventory
    * Add inventory

![Screenshot](/images/manager_options.png)

When the manager selects view products on sale it will show the current inventory in a table.

![Screenshot](/images/view_product.png)

When the manager views low inventory, it will only show items with a stock quantity of less than 5.

![Screenshot](/images/low_inventory.png)

To add inventory, the manager selects the item ID they want to add to, and input the quantity amount.

![Screenshot](/images/add_inventory.png)

The Bamazon app also features npm packages to make unicode tables and text with colors:
http://www.npmjs.com/package/cli-table

https://www.npmjs.com/package/colors
