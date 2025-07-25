**🍲 Recipe API**

A simple RESTful API for managing recipes using Node.js, Express, and MongoDB.

**📌 Features**

Full CRUD functionality

MVC architecture

MongoDB integration via Mongoose

Error handling and input validation

Postman collection with sample requests/responses

**🔗 API Endpoints**

<img width="623" height="287" alt="image" src="https://github.com/user-attachments/assets/d8f02c7e-e5a7-44e2-98d0-c59858c212d1" />


**📃 Sample POST Body**

{

  "name": "Paneer Butter Masala",
  
  "ingredients": ["Paneer", "Tomato", "Cream", "Spices"],
  
  "instructions": "Cook paneer, add sauce, simmer.",
  
  "cookTime": "25 min",
  
  "cuisine":"Indian"
  
}


**📊 Project Structure**

Food-Recipe/

├── controllers/

│   └── recipe.js

├── models/

│   └── recipeSchema.js

├── routes/

│   └── recipe.js

├── views/

├── config/

│   └── connectionDB.js

├── .env

├── server.js

├── package.json
