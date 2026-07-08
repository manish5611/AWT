Program Name
Program 4 - Order Detail List

The lab question.
Create and display an order detail list for any 3 items which will include the product name, product description, price and quantity. When an onClick event is triggered on a button the quantity has to increase and the total cost along with Order date and Expected delivery Date, has to be calculated and displayed with the update of items quantity.

Folder Structure
Program4
│── src
│   │── App.jsx
│   │── main.jsx
│   │── App.css

Steps to Run
npm install
npm run dev

Expected Output
A blue-themed web page showing an "Order Summary" with 3 products (MAC book, Dell core i7, HP). Clicking the "+" button below any product will increase its quantity and automatically update the "Total" price. The current date and expected delivery date (+3 days) will be displayed at the bottom.

Common Errors
Module not found: Check if import './App.css' is spelled correctly.
Wrong import path: Ensure all files are in the same src folder.
JSX syntax errors: Verify that all JSX elements like <div> and <p> are properly closed.
Forgot to save the file: Remember to save all modified files in your editor.
Running outside the project folder: Always make sure you are inside your project folder in the terminal before starting the server.
