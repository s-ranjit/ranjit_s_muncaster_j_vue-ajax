# 🧸 Toy Store API & Frontend

This project is a full-stack application consisting of:

- **Frontend** – Consumes the API and displays toy and brand data  
- **Backend API (Laravel)** – Handles database, business logic, and RESTful endpoints  

## 📚 Table of Contents
- [Home](#home)
- [About](#about)
- [Shop](#shop)


## 🌸 Overview
This project is a responsive toy website built using **Vue.js** which is connected with **Laravel REST API**.
Front-end mainly focuses on responsive design with data updates and smooth interactions.


## 🎨 Features
- Display a list of toys fetched dynamically from the API
- Click on a name/image of toy to get detailed information
- Responsive layout for desktop and mobile
- Loading indicators and error handling 


## 🎨SASS Workflow
1. 🎛 Variables (colors, fonts, spacing)
2. 🧩 Modular Partials (abstracts, base, components, pages, etc.)
3. 🧹 Cleaned and easy to understand code and removed unwanted comments
4. 🗜 Minified output CSS


## 🗂️GitHub Workflow
1. 🎛 Separate branches according to pages, sections and languages.
2. 🧩Proper branch naming conventions
3. 👩🏻‍💻Work with GitHub directly with back and forth commits.
4. 📁Add .gitignore 
5. 📄Well-written README file 

## 📦 Project Setup Guide

1. Clone the Repositories and Open in VS Code
git clone https://github.com/s-ranjit/ranjit_s_muncaster_j_vue-ajax
git clone https://github.com/j-muncaster/ranjit_s_muncaster_j_laravel-api

2. Navigate to Backend Folder
cd toy-store-api

3. Install Dependencies
composer install

4. Create Environment File
cp .env.example .env

5. Configure Database
Open .env and update:
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=8889 (Mac) or (3306 on Windows)
DB_DATABASE=db_toy_store
DB_USERNAME=root
DB_PASSWORD=root (Mac) or (leave empty for Windows)

6. Create Database
- Run MAMP / WAMP and open phpmyadmin
- Create a database named db_toy_store

7. Run Migrations and Seed Database
php artisan migrate:fresh --seed

8. Start Backend Server
php artisan serve

9. API Endpoints
| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| GET    | `/api/brands`      | Get all brands     |
| GET    | `/api/brands/{id}` | Get a single brand |
| POST   | `/api/brands`      | Create a brand     |
| PATCH  | `/api/brands/{id}` | Update a brand     |
| DELETE | `/api/brands/{id}` | Delete a brand     |

| Method | Endpoint         | Description      |
| ------ | ---------------- | ---------------- |
| GET    | `/api/toys`      | Get all toys     |
| GET    | `/api/toys/{id}` | Get a single toy |
| POST   | `/api/toys`      | Create a toy     |
| PATCH  | `/api/toys/{id}` | Update a toy     |
| DELETE | `/api/toys/{id}` | Delete a toy     |

10. Open the frontend file and click 'Go Live' at the bottom right of VS Code to view the page.


## 🕰 History
📆 Created on **March 27, 2026**

## 👨‍💻 Credits
Designed and Developed by **Situ Ranjit** and **Josephine Muncaster** 🎨

## 📫Contact
Feel free to reach out to us!  

LinkedIn: [Situ Ranjit](https://www.linkedin.com/in/situ-ranjit-187970325/) , [Josephine Muncaster](https://www.linkedin.com/in/josephine-muncaster-382674135/)