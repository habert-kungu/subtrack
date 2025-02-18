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

# DATABASE For Mongoose i set up the free tier
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET 
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH tokens 
QSTASH_URL=http://localhost:8080
QSTASH_TOKEN=

# NODEMAILER from gmail
EMAIL_PASSWORD=
```
### Run the Project 
```bash
npm run dev
```
ill soon be be deploying it on a hosting platform 
this are some of the test i used depending on day of writing this you can use postman or [Httpie](https://httpie.io/).

### Sign Up 
---
#### url 
```bash
http://localhost:5500/api/v1/auth/sign-up
```
#### body 
```bash
{
"name":" name",
"email":"email",
"password" : "123123"
}
```
### Sign In
---
#### url 
```bash
http://localhost:5500/api/v1/auth/sign-in
```
#### body 
```bash
{
"email":"email",
"password" : "123123"
}
```

### Subscriptions 
---
#### url 
```bash
http://localhost:5500/api/v1/subscriptions
```
#### body 
```bash

{
"name":"youtube Premium  ",
"price": 15.99,
"currency": "USD",
"frequency":"monthly",
"category":"entertainment",
"startDate":"2025-01-26T00:10:01.000Z",//please adjust the date 
"paymentMethod":"Credit Card"
}
```
Bearer token - add your own on sign up 
### Email Output 

![subtrack](https://github.com/user-attachments/assets/29dd0f7d-3e39-4a74-b5ec-eee157a4750e)



![Screenshot from 2025-02-18 19-19-50](https://github.com/user-attachments/assets/e7896855-b30b-4c27-ae0b-ea16d37e35a6)
