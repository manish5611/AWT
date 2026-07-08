Program Name
Program 6 - Library Management REST API

The lab question.
Build a REST application for Library Management using NodeJS & Express JS.

Folder Structure
Program6
│── server.js

Steps to Run
1. Open terminal in the Program6 folder.
2. Run command: npm init -y
3. Run command: npm install express
4. Start the server: node server.js

Expected Output
The terminal will display "Library Management Server is running on http://localhost:3000".

Instructions to Test using Thunder Client:
1. Open the Thunder Client extension in VS Code.
2. Click "New Request".

3. To GET all books (READ):
   - Method: GET
   - URL: http://localhost:3000/books
   - Click "Send". You should see a list of books in JSON format.

4. To ADD a new book (CREATE):
   - Method: POST
   - URL: http://localhost:3000/books
   - Go to the "Body" tab -> select "JSON".
   - Enter the following JSON:
     {
       "title": "The Hobbit",
       "author": "J.R.R. Tolkien"
     }
   - Click "Send".

5. To UPDATE a book (UPDATE):
   - Method: PUT
   - URL: http://localhost:3000/books/1
   - Go to the "Body" tab -> select "JSON".
   - Enter the following JSON:
     {
       "title": "The Great Gatsby - Updated Edition"
     }
   - Click "Send".

6. To DELETE a book (DELETE):
   - Method: DELETE
   - URL: http://localhost:3000/books/2
   - Click "Send".

Common Errors
Cannot GET /: The server does not have a route for the root path. Use /books instead.
Port already in use: Another server is running on port 3000. Stop the other server or change the port in server.js to 3001.
Cannot find module 'express': You forgot to run npm install express.
