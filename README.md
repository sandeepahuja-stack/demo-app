# Insure Dummy Project

## Get Started

### Clone the repo
```
 git clone https://github.com/sandeepahuja-stack/demo-app.git
```
### Install the dependencies
```
    npm install 
```

#### Running an app

All pages are located in `pages` folder
```  
 npm run start 
```


#### Linting of an app
```
    npm run lint:fix
```

## Structure of an app
```
src/
|-- constants/ => apiendpoints and many more
|-- assets/
|-- components/ 
		|-- common => resuable components
				|-- Layout => Layout of an application
				|-- Navbar => Navbar of an application
				....
		|-- Login
		|--HomePage
		....
|-- hooks/ => resuable custom hooks with business logics 
|-- pages/ => pages of the application
|-- redux/ => Store of the application
			|-- actions/ => actions to be disaptched
			|--	config/ => store config
			|-- reducers/ => reducers to be used
			 		|-- customerList/ => contains initial state, reducer file and thunk file
					...
			|-- types/ => constant used in reducer and actions
			...
|-- services => resuable apis
|-- utils => utility folder

```


## Tools Used
- [React] (https://reactjs.org/) - overall app based on react
- [Redux] (https://redux.js.org/) - state of an app
- [Material Ui] (https://mui.com/material-ui/getting-started/overview/) - UI Components
- [Redux-Thunk] (https://github.com/reduxjs/redux-thunk) - Middleware
- [axios]: For Api calls
- [gapi-script & react-google-login ]: for Google Outh



## ScreenShots of application
#### User not loggedIn
<img width="1792" alt="usernotloggedin" src="https://user-images.githubusercontent.com/62178420/200519895-8cb79a78-5490-49de-ae9e-b8ec56ce76ee.png">

#### After logged in with infinite page scroll for pagination
<img width="1792" alt="infinite scroll for pagination" src="https://user-images.githubusercontent.com/62178420/200520093-68d82304-0629-4a6d-920a-e831b0ee551f.png">

<img width="1792" alt="afterlogin homepage" src="https://user-images.githubusercontent.com/62178420/200520058-8b4590b0-52b9-452f-b85f-6d733df007a5.png">

#### 404 page Not Found
<img width="1792" alt="No page found" src="https://user-images.githubusercontent.com/62178420/200520400-b72ec9e0-d0d6-4169-a84f-59b8fefd51c0.png">

#### Additional Search functionality added to search in the filtered user
<img width="1792" alt="additional functionality of search" src="https://user-images.githubusercontent.com/62178420/200520259-17e5f734-bba6-4940-9307-b3a263f6a768.png">

```
  Note: We can use debonce when we call api at the time of search
```


## Video

https://user-images.githubusercontent.com/62178420/200521781-be1637a1-9209-47ee-8fbb-84b9bdd2b5f6.mov



