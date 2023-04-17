# NARANI

Back-end project for food order app (**mobile** and **web**)!

# About the project

This project has been created in the third module at Ironhack São Paulo - Web Development Bootcamp.

Simple REST API to allow for complete CRUD at the endpoint: [https://github.com/NayraGuerreiro/projeto-final-back]

**Caution: Exclusive use for Narani-Client**

# Usage

Complete CRUD functionality

## User Routes

**Create**

```
POST /api/user/signup

```

**Login**

```
POST /api/user/login

```

## Menu Routes

**Create Dish**

```
POST /api/menu

```

**Get All Dishes**

```
GET /api/menu

```

**Get Current Dish by Id**

```
GET /api/menu/details/:id

```

**Update Dish by Id**

```
PUT /api/menu/edit/:id

```

**Delete Dish by Id**

```
DELETE /api/menu/delete/:id

```

## Order Route

**Create Order**

```
POST /api/order/
```

**Delete Order by Id**

```
DELETE /api/order/:id

```

**Get All Orders **

```
GET /api/order/

```

## Image Route

**Create Image**

```
POST /api/uploadImage

```

# Developer GitHub

- [Rafael Gilberto Rezende Lima](https://github.com/RafaelGilberto)
- [Nikolas Mendes](https://github.com/nikolasMendes)
- [Nayra Guerreiro](https://github.com/NayraGuerreiro)

# NARANI CLIENT

Front-end for food order app (**mobile** and **web**)!

[Click here](https://projeto-narani.netlify.app/)

## Install

To run the application on your localhost, clone the repo and then execute the commands below:

**Note: Don't forget to create .env and update like exemple.env**

- `$ git clone [https://github.com/NayraGuerreiro/projeto-final-front.git)`
- `$ cd NARANI-front-end npm install`
- `$ npm run start`
