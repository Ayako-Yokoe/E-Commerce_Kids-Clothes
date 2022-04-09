# E-Commerce_Kids-Clothes

## About this app
E-Commerce_Kids-Clothes is a MERN stack application, where admins can add, edit, and delete products based on CRUD operation, and clients can browse and purchase the products utilizing Stripe.

## Technologies used
- MongoDB
- Express.JS
- React.JS
- Node.JS
- Redux Toolkit
- Firebase
- Axios
- Stripe
- Styled-components
- MUI

## Front end - client

![screen-gif](./READ.ME-ezgif-1-385674d136.gif)

**Register / Log in / Log out**<br/>
Only the users who register and are given a JWT are permitted to see a product page.<br/>
**Search**<br/>
Users can search by categories, colors, sizes, or prices.<br/>
**Favorites**<br/>
Users can save their favorite items, and if any, the icon color changes and the number of favorite items displays.<br/>
**Cart**<br/>
Users can choose the number of items, see the total price, and proceed to purchase.

## Front end - admin
**CRUD**<br/>
Admins can create a new product, edit it, and delete it.<br/>
*Authorization is required<br/>
**Images**<br/>
Image data is stored in Firebase.

## Backend
**Password**<br/>
Input passwords are secured with the use of CryptoJS.

## Challenging part
It was my first time creating this large-scale application, so it was challenging to understand the structure and pass data between components.<br/>
e.g. Favorite - Cart - Calculate Total Amount<br/>
At first, the data was not passed from Favorite to Cart, and the total price was displayed NaN. That was because the total quantity was set for all products, not for each product.
Here is the solution:

(cartSlice)<br/>
```
addProduct: (state, action) => {
    const itemIndex = state.products.findIndex(product => product._id === action.payload._id)
    if(itemIndex >= 0){
        state.products[itemIndex].productQty += 1
    } else {
        const tempProduct = {...action.payload, productQty: 1}
        state.products.push(tempProduct)
    }
    
    state.totalQuantity = state.products.length
}
```

## Stripe
**Test**<br/>
Use a card number: 4242 4242 4242 4242<br/>
Expiration date: any future date<br/>
CVC: any three-digit numbers<br/>
Others: any value

## License
Images - [Unsplash](https://unsplash.com/)
