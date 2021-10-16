# Technical challenge 📸

A project created with React which cosumes the Unsplash API and allows to see different photos by categories, like latest ones, oldest ones or popular ones. The user can also search by custom keywords. With the following url you will be able to see the deployed project.


## Starting with the project 🚀

$ git clone https://github.com/EdwinLeal24/unsplash_challenge

$ cd unsplash_challenge 

$ yarn install (to install the dependencies) 

$ yarn run dev 

The project will be running in the localhost:3000

## Tools 🛠️

The project is made with React. I have used React router dom to route into different pages and Axios to make the petition to the API.

## Work tree 🖇️
```
src
 src
 ┣ components
 ┃ ┣ Dialog
 ┃ ┃ ┣ Dialog.jsx
 ┃ ┃ ┗ Dialog.module.css
 ┃ ┣ GridPhotos
 ┃ ┃ ┣ GridPhotos.jsx
 ┃ ┃ ┗ GridPhotos.module.css
 ┃ ┣ Header
 ┃ ┃ ┣ Header.jsx
 ┃ ┃ ┗ Header.module.css
 ┃ ┣ InfoProfile
 ┃ ┃ ┣ InfoProfile.jsx
 ┃ ┃ ┗ InfoProfile.module.css
 ┃ ┣ PhotoCard
 ┃ ┃ ┣ PhotoCard.js
 ┃ ┃ ┗ PhotoCard.module.css
 ┃ ┗ shared
 ┃ ┃ ┣ ButtonPrimary.jsx
 ┃ ┃ ┗ ButtonPrimary.module.css
 ┣ context
 ┃ ┣ AppContext.jsx
 ┃ ┣ actions.js
 ┃ ┣ appReducer.js
 ┃ ┗ types.js
 ┣ pages
 ┃ ┣ home
 ┃ ┃ ┣ Home.jsx
 ┃ ┃ ┗ Home.module.css
 ┃ ┣ notFound
 ┃ ┃ ┗ 404.js
 ┃ ┣ profile
 ┃ ┃ ┣ Profile.jsx
 ┃ ┃ ┗ Profile.module.css
 ┃ ┣ views
 ┃ ┃ ┗ index.js
 ┃ ┣ App.css
 ┃ ┗ App.js
 ┣ routing
 ┃ ┣ paths.js
 ┃ ┗ router.js
 ┣ services
 ┃ ┣ api
 ┃ ┃ ┣ api.js
 ┃ ┃ ┗ httpManager.js
 ┃ ┗ service.js
 ┣ index.css
 ┣ index.js
 ┗ logo.svg
 ```
 
### Components
In this folder can be found different components to build the app spliting into various subfolders with their styles.

### Context
The folder where I store all the state of the application. I have decided to use redux patrons in order to control the project easily when it gets bigger.

### Pages
Each file in the folder is a route of the project exept for index which is inside the view folder and is in charge of importing different components when needed. 

### Routing
Here can be found the files which control the routes to simplify the generetion of the switch component when the app grows.

### Services
The folder where can be found the services used by application, for example calls to the API and axios instance. Any kind of petition to the data base, like get, post, or put will be handled from here. 
 


 
 
