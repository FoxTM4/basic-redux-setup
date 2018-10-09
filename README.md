### Basic React-redux setup

* run `npm i`
* `npm i redux react-redux`

## SETUP

* create `redux` folder in `src`
* create `reducer.js` in `redux` folder
* create `store.js` in `src` folder 
  * here we import `createStore` from `redux` and `reducer` from `./redux/reducer`
* in `index.js` import `provider` from `react-redux` and `store` from `./store`
* also in `index.js` wrap `App.js` in `<Provider store={store}>`