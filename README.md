# Monkii Shop

This is simple shop page, rendering products from a json file and allowing the user to sort, filter and add the items to their cart. This project is built with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) and uses [Styled Components](https://styled-components.com/).

## How to use

Using the dropdown select inputs, you can _sort the products by price_ and also _filter the products by size_.

You can add products to the cart by selecting the product's `Add to cart` button.

You can view what's inside your cart by clicking on the shopping cart icon in the header. You can close your cart and go back to the shop page by clicking the `Continue shopping` button.

## Testing

This application is tested using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

## Accessibility

I chose to use a foundation dialog modal by [ReachUI](https://reach.tech/dialog/) to display the shop items, as it provides completely accessible React components to build upon.

## Improvements

- Ability to remove items from the cart: I would have added a button to be able to remove items from the shopping cart. I would have added this functionality to the provider.
- Ability to select a size to add to the cart: I would have created a select input for a user to be able to select a size. I would have then saved this data and added it to the product object which is pushed onto the cart items array.
- Create a json server to fetch the data: I would have served the data via an API using a library such as [`json-server`](https://www.npmjs.com/package/json-server). I would have had to adjust my testing strategy as the data would be coming from the API. One possible solution would be to use [MSW](https://mswjs.io/) to mock the endpoint so that I could generate test data for the responses.
- Product pages: I would have used [React Router](https://reactrouter.com/) to set up navigation between pages.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
