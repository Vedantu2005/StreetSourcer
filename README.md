StreetFood Source - Vendor & Supplier Platform 🚀
A web platform connecting local street food vendors with trusted suppliers for quality raw materials. This project provides a seamless interface for vendors to browse products and place orders, and a comprehensive dashboard for suppliers to manage their inventory and incoming requests.

✨ Core Features
This platform is divided into two main user roles, each with its own set of powerful features.

For Vendors 👨‍🍳
Browse Suppliers: View a categorized list of available suppliers (e.g., Vegetables, Dairy, Grocery).

View Products: Explore detailed product listings from each supplier.

Search & Sort: Easily find products with a real-time search filter and sort them by price.

Place Orders: Add items to an order through an intuitive modal form.

Order History: Track the status of all past and present orders in a dedicated history page.

For Suppliers 🌾
Secure Authentication: Secure login and signup system for suppliers.

Inventory Management: A dashboard to view all listed products and their current stock.

Add Products: A simple form to add new products to the inventory, including name, price, stock, and image URL.

Delete Products: Remove products from the inventory with a single click.

Order Management: View all incoming order requests from vendors in real-time.

Update Order Status: Change the status of an order from "Pending" to "Completed" via an interactive dropdown.

🛠️ Technology Stack
Frontend: HTML5, CSS3, JavaScript (ES6+)

Framework: Bootstrap 5 for responsive UI components.

Backend & Database: Google Firebase

Firestore: NoSQL database for storing product, order, and user data.

Firebase Authentication: For managing user login and registration.

🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
You need a web browser and a code editor. To run the project locally, the Live Server extension for VS Code is highly recommended.

Setup
Clone the repository:

Bash

git clone https://github.com/your-username/your-repository-name.git
Create a Firebase Project:

Go to the Firebase Console.

Click "Add project" and follow the on-screen instructions.

Once your project is created, click the "Web" icon (</>) to register a new web app.

Copy the firebaseConfig object provided.

Update Firebase Configuration:

In each of the following files, replace the placeholder firebaseConfig object with the one you just copied from your Firebase project:

addproducts.html

freshkart.html

supplier-dashboard.html

supplier-login.html

history.html

greenleaf-farms.html

Configure Firebase Services:

In the Firebase Console, go to the Authentication section, select the "Sign-in method" tab, and enable Email/Password.

Go to the Firestore Database section, click "Create database", and start in test mode for now.

Run the Project:

Open the project folder in your code editor (like VS Code).

Right-click on index.html and select "Open with Live Server".

🔐 Test Credentials
You can use these pre-registered accounts to test the application.

Supplier Accounts
Email: greenleaffarms@gmail.com

Password: 11111111

Email: freshkart@gmail.com

Password: 11111111

Vendor Account
Email: vedant@gmail.com

Password: 11111111
