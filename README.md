# Demo

https://github.com/Tush2890/online-grocery-app-client/assets/39027684/ced994cb-078e-4a14-bda3-49d275f15bde

# To use this project

This project is using node-js server for it's services. 
To use this project completely, you need to clone the [online-grocery-app-server](https://github.com/Tush2890/online-grocery-app-server/tree/main) repo. Please refer the `Readme.md` file of this repo to start the node-js server.

You also need to add an `.env` file at the root of your project that should have following contents:-

- HTTPS=true
- REACT_APP_API_URL = http://localhost:4000
- REACT_APP_AUTH0_CLIENT_ID = YOUR_AUTH0_CLIENT_ID
- REACT_APP_AUTH0_DOMAIN = YOUR_AUTH0_DOMAIN
- SSL_CRT_FILE = YOUR_SERVER_CERTIFICATE_PATH
- SSL_KEY_FILE = YOUR_SERVER_KEY_PATH

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
