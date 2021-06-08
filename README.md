[![Build Status](https://travis-ci.com/JoaoBaggio/node-api.svg?branch=main)](https://travis-ci.com/JoaoBaggio/node-api)
[![Coverage Status](https://coveralls.io/repos/github/JoaoBaggio/node-api/badge.svg?branch=main)](https://coveralls.io/github/JoaoBaggio/node-api?branch=main)

<div align="center">
  <h1>Node.js API with TS</h1>
  <p> João Baggio</p>
</div>

## Intro
You must have node and docker-compose
#### Install 
 ~~~bash
npm install 
 ~~~

#### Running docker-compose 
This will run the api on port **15050**
postgres and redis will also run
This might take a few minutes
 ~~~bash
npm run up 
 ~~~
 
#### Running migrations and seeds
running seeds is optional, if you run 3 sample shirts will be added to database
 ~~~bash
npm run migration && npm run seed 
 ~~~

#### Stopping  docker-compose
This will kill all process, but data will saved
 ~~~bash
npm run down 
 ~~~

#### Debug 
If you use VS Code this will be very helpful our docker runs with nodemon watching /dist folder. You can debug/add breakpoints on a docker cointainer!
 ~~~bash
npm run watch
 ~~~
This command below only run unit test that are on staging, very handy when codding
  ~~~bash
npm run test:unit
 ~~~
 
#### Test 
Finally you can check all test by running:
 ~~~bash
npm run test
 ~~~
 
 ## Routes and Behavior
 Our api can signUp a new user, login, list all products, add a new product do db, add a select product to cart, remove product from cart, list all products from cart and make a checkout to payment api (pagar.me)
 
 
1. SignUp
	Use /sign with method POST.
	Required: Name, email, password and passwordConfirmation
	Response: accesstoken
2. Login
	Use /login with method POST.
	Required: email and password
	Response: accesstoken
3. Add Product
	Use /addproduct with method POST.
	Required: name, description, image, value, factor
4. List Product
	Use /listproduct with method GET.
	Required: nothing, this is a public route
5. Add item to cart
	Use /:id/addtocart with method POST.
	Required: product id param and accesstoken on headers
6. Add item to cart
	Use /cart with method GET.
	Required: accesstoken on headers
7. Remove item to cart
	Use /:id/removefromcart with method DELETE.
	Required: product id param and accesstoken on headers
8. Checkout
	Use /checkout with method POST.
	Required: accesstoken on headers
 ## Deploy
 
 I used [Heroku](https://www.heroku.com) to deploy my api, you can check at https://totvs-jbaggio-api.herokuapp.com