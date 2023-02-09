## Getting Started

**_Note_**: Do not clone or fork, download as ZIP.

1. Downlaod as ZIP from [https://github.com/riteshf/products-app-boiler.git](https://github.com/riteshf/products-app-boiler.git) inside your masai-repo
2. unzip.
3. navigate to the folder `cd products-app-boiler`
4. npm install
5. npm start
6. Make sure your `json-server` is running on port `8080`, `db.json` file is provided.

## Problem

- Create the following APP: [Products Routes WebApp](https://b22-c2.vercel.app/) using the Provided Boilerplate.

**_Notes_**:

- Make sure you start `json-server` on `8080` port with provided `db.json` file, then only you will be able to see data on this website.
- Libraries are not installed, you need to install all the required libraries yourself.
- Use of Redux for this assignment is Mandatory.

## Features to build

1. Use of Redux to perform this is mandatory, else you will get zero marks.
   - Use the given action types and initial State for each reducer.
2. `/`: `Home` is a protected route, accessible post login.
3. App should redirect to `/login`: `Login` page as soon as he visits the `/` : Home Url.
4. Post `Login`, user should be re-directed to `/`: Home Page.
5. Only Post login User should fetch `/products` and `/cartItems` and populate at required place.
6. Products
   - User Should be able to Add Product to cart, if that product is not already existing in `/cartItems`.
     - Initial Count is 1
   - Increment/Decrement Cart Item Count by Matching Product ID
   - Remove Product from Cart only if Added.
7. Reset should reset the state to default/initial state.
8. For login, use (reqres.in)[https://reqres.in]

### Hints

1. Understanding Component Structure

   - [App](./src/App.js)

     - [Navbar](./src/components/Navbar/Navbar.jsx) // common for all routes
     - [Home](./src/pages/Home.jsx) // Protected Route, accessible post login
       - [Products](./src/components/Products/Products.jsx)
         - [Product](./src/components/Products/Product/Product.jsx)
     - [Login](./src/pages/Login.jsx) // Public Route

   - **Note** - `Make sure you use only the given components and dont create new files and folders. Changing component name, structures might result in giving you zero marks.`

2. Redux reducers to reuse

   - [store](./src/store/store.js)

     - [auth](./src/store/auth/auth.reducer.js)
     - [cart](./src/store/cart/cart.reducer.js)
     - [product](./src/store/product/product.reducer.js)

   - **Note** - Make sure you use only the given `action`, `types`, `reducer`, `store` and also make sure you us ethe same keys as `auth`, `cart` and `product`.

3. Understanding Data Structure

   - [db.json](./db.json)

     - Initial Products should be fetched using json-server only after user logs in.
     - cartItems has following operations, accessible post login
       - Add
       - Delete
       - Update Count

   - **Note** - `Make sure you use only the given data and dont create new data. Changing data might result in giving you zero marks`

#### Submission

- You need to Submit **Github Link** as well as **Deploymnet link**.
- Deployment is Mandatory.
- Make sure you use masai github account provided by MasaiSchool(submit link to correct folder of your repository on github).
- Make Sure you have submit home page link.

## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for CSS or as UI Library.
2. Do Not Remove `data-cy="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.
3. Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks
4. Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components.

### Fun fact

Try running `npm run cypress:run` post completion of assignment, it will generate `marks.json` which will have your marks.
