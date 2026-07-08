Program Name
Program 7 - CRUD operations with NodeJS and MongoDB

The lab question.
Perform CRUD operations with NodeJS with MongoDB.

Folder Structure
Program7
│── server.js

Steps to Run
1. Make sure MongoDB is installed and running locally on your computer (mongodb://127.0.0.1:27017).
2. Open terminal in the Program7 folder.
3. Run command: npm init -y
4. Run command: npm install express mongoose
5. Start the server: node server.js

Expected Output
The terminal will display "MongoDB CRUD Server is running on http://localhost:3000" followed by "Successfully connected to MongoDB".

Instructions to Test using Thunder Client:
1. Open the Thunder Client extension in VS Code.
2. Click "New Request".

3. To ADD a new student (CREATE):
   - Method: POST
   - URL: http://localhost:3000/students
   - Go to the "Body" tab -> select "JSON".
   - Enter the following JSON:
     {
       "name": "John Doe",
       "age": 20,
       "course": "Computer Science"
     }
   - Click "Send".
   - IMPORTANT: Copy the "_id" value from the response (e.g., "64f1a2b3c4d5..."). You will need it for UPDATE and DELETE.

4. To GET all students (READ ALL):
   - Method: GET
   - URL: http://localhost:3000/students
   - Click "Send".

5. To GET a specific student by ID (READ ONE):
   - Method: GET
   - URL: http://localhost:3000/students/<PASTE_ID_HERE>
   - Click "Send".

6. To UPDATE a student (UPDATE):
   - Method: PUT
   - URL: http://localhost:3000/students/<PASTE_ID_HERE>
   - Go to the "Body" tab -> select "JSON".
   - Enter the following JSON:
     {
       "age": 21
     }
   - Click "Send".

7. To DELETE a student (DELETE):
   - Method: DELETE
   - URL: http://localhost:3000/students/<PASTE_ID_HERE>
   - Click "Send".

Common Errors
MongooseServerSelectionError: Your local MongoDB is not running. Start your MongoDB server (mongod) before running the Node server.
Cannot find module 'mongoose': You forgot to run npm install express mongoose.
Cast to ObjectId failed: You pasted an invalid ID in the Thunder Client URL. Make sure it is exactly the 24-character string returned when you created the student.
