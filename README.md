# Inventory-Man-Back-end
Inventory System Backend
This is the backend component of an inventory system project developed using Node.js and MongoDB. The backend is responsible for handling data storage, retrieval, and authentication functionalities.

Technologies Used
The following technologies were used in the development of the backend:

Node.js: A JavaScript runtime environment that allows executing JavaScript code on the server-side.
MongoDB: A NoSQL database used for storing and retrieving data.
jsonwebtoken: A library used for generating and verifying JSON web tokens (JWTs) for authentication and authorization purposes.
express: A web application framework for Node.js, providing a robust set of features for building APIs and handling HTTP requests.
cors: A middleware used to enable Cross-Origin Resource Sharing (CORS) in the server.
Getting Started
To get the backend up and running on your local machine, follow the steps below:

Ensure you have Node.js and MongoDB installed on your system.
Clone the repository: git clone https://github.com/saad662/Inventory-Man-Back-end/.git
Navigate to the backend directory: cd backend
Install the dependencies: npm install
Start the server: node server.js
The backend server should now be running on http://localhost:5000.
API Endpoints
The backend exposes the following API endpoints:

POST /register: Create a new user account and generate an authentication token.
POST /login: Authenticate user credentials and generate an authentication token.
POST /add-product: Create a new product.
GET /products: Retrieve all products.
GET /products/:id: Retrieve a specific product by ID.
PUT /products/:id: Update a specific product.
DELETE /products/:id: Delete a specific product.
GET /search/:key: Search for products by name or company.
Code Overview
Below is an overview of the main code files in the project:

server.js: The main entry point for the backend application. It sets up the server, initializes the database connection, and defines the API routes.
authController.js: Contains the controller functions for user registration and login. It uses JSON web tokens (JWTs) for authentication.
inventoryController.js: Contains the controller functions for managing products, including creating, retrieving, updating, and deleting products.
inventoryModel.js: Defines the data model and schema for the "Product" collection in the MongoDB database.
authRoutes.js: Defines the API routes related to user authentication (register and login).
inventoryRoutes.js: Defines the API routes related to product management (add, get all, get by ID, update, and delete).
errorHandler.js: Contains utility functions for handling errors in the application.
auth.js: Middleware function for verifying JWT tokens.
Conclusion
The backend component of the inventory system project provides the necessary functionality for user authentication and product management. With the technologies and code structure mentioned above, the backend serves as a solid foundation for the overall project. Feel free to explore the code and modify it to suit your specific requirements.
