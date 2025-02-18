# Subscription Management System API

This repository contains the code for a **Subscription Management System API** built using **Node.js**, **Express.js**, and **MongoDB**.


---

## 📋 Table of Contents
- [🤖 Introduction](#-introduction)
- [⚙️ Tech Stack](#️-tech-stack)
- [🔋 Features](#-features)
- [🤸 Quick Start](#-quick-start)
- [🕸️ Snippets (Code to Copy)](#️-snippets-code-to-copy)
- [🔗 Assets](#-assets)
- [🚀 More](#-more)
- [🚨 Tutorial](#-tutorial)

---

## 🤖 Introduction
**production-ready Subscription Management System API** that handles real users, real money, and real business logic. This project covers:

- **JWT Authentication**: Secure user authentication and authorization.
- **Database Modeling**: Create models and relationships using MongoDB and Mongoose.
- **Global Error Handling**: Implement middleware for error handling and input validation.
- **Advanced Features**: Rate limiting, bot protection, logging mechanisms, and automated email reminders.

---

## ⚙️ Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB**

---

## 🔋 Features
- **Advanced Rate Limiting and Bot Protection**: Secure your app with [Arcjet](https://arcjet.com/).
- **Database Modeling**: Define models and relationships using MongoDB and Mongoose.
- **JWT Authentication**: Manage user CRUD operations and subscriptions.
- **Global Error Handling**: Validate inputs and integrate middleware.
- **Logging Mechanisms**: Improve debugging and monitoring.
- **Email Reminders**: Automate email workflows using [Upstash](https://upstash.com/).
- **Code Architecture**: Scalable and reusable code structure.

---

## 🤸 Quick Start
Follow these steps to set up the project locally on your machine.

### Prerequisites
Make sure you have the following installed:
- **Git**
- **Node.js**
- **npm** (Node Package Manager)

### Cloning the Repository
```bash
git clone https://github.com/habert-kungu/subtrack.git
cd subtrack 
```
### Install the necessary dependencies 
```bash
npm install
```
### Create a *.env.local* file in the root of your project and add the following content:
```bash
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# NODEMAILER
EMAIL_PASSWORD=
```
### Run the Project 
```bash
npm run dev
```



