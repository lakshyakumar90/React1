# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles



# Namaste Food


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */



 Two types of Export/Import


- Default Export/Import

export default Component;
import Component from "path";


- Named Export/Import

export const Component;
import {Component} from "path";


# React Hooks
 (Normal JS utility functions)
- useState() - Superpowerful State Variables in react
- useEffect()



#  2 types Routing in web apps
 - Client Side Routing 
     When we first load our page in browser it loads all our components and when we route to let's say About Us page it just loads about component 
 - Server Side Routing
     It fetches the data from the server


# Problem with Single page application (Class Based Component)
 - When a setInterval like operation is done then even if you navigate from home to about or career page or anything it will continue doing the setInterval because it will not refresh the page it will just finds the difference and rerender the DOM page (react is just reconciling) and everytime I navigate to that page with setInterval and       another instance of setInterval will be called and then there are 2 setIntervals. 

 So clear set interval in componentWillUnmount.

 - In functional component if in useEffect you use setInterval it will also behave same as class based             componentDidMount =>
 To avoid this:
 return () => {

 }
 from useEffect.

 # Prop Drilling
 - Passing data through props from one component to another

 # React Context
 - When a data is required in a large number of components and it can't be passed through the props.
 - That's why we need context and we can use that in our project anywhere
 - Keeps data in the central place and use them anywhere you want
 
 # React Redux
 - It helps in simplifying the state management
 - It works with the Data layer of our application
 - React and Redux are two separate libraries, it is not a part of react


 # Redux Toolkit
 - Earlier redux store used to be too complicated
 - Used to add many packages to get redux to do anything useful
 - Requires too much boilerplate code

 - There are slices(small portion) in our Redux Store:

   # Write the Data
    - When you click on the ADD BUTTON there is Dispatch and Action => it calls a function ( known as reducer ) => this function modifies the cart(a slice of our redux store)

   # Read the Data
    - We will use a selector to read the data from our store and this selector will update our react component => and this process is called as (Subscribing to the Store (Sync with the store) )


 - Click on Add -> Dispatch and Action -> Reducer function called -> Slice of the Redux store updated 
 AND React component -> Subscribed to the Redux store using a selector.

   # What we will do
   - Install @reduxjs/toolkit and react-redux
   - Build our store
   - Connect our store to our app
   - Slice (cartSlice) to add our items 
   - Dispatch and Action
   - Read the data using selector

# Testing
  - We are only concerned with development testing
  - Manual Testing
  - or write code to test the application 

  # 3 types of testing(developer)
    - Unit Testing
    - Integrated testing
    - End to End testing - e2e testing

