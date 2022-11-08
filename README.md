# User List with Google Auth

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





