import productReducer from './../src/Redux/Products/reducer.js'
import articlesReducer from './../src/Redux/Articles/reducer.js'
import commentsReducer from './../src/Redux/Comments/reducer.js'

import {addProductAction} from "./../src/Redux/Products/actionCreators.js"

const store = Redux.createStore(Redux.combineReducers({
  products: productReducer,
  articles : articlesReducer ,
  comments : commentsReducer
}))


console.log(store.getState())


store.subscribe(() => console.log(`store updated => ${store.getState()}`))

store.dispatch(addProductAction({id:1 , title : "hi" , price : 90}))
store.dispatch(addProductAction({id:1 , title : "hi" , price : 90}))
store.dispatch(addProductAction({id:1 , title : "hi" , price : 90}))
store.dispatch(addProductAction({id:1 , title : "hi" , price : 90}))
store.dispatch(addProductAction({id:1 , title : "hi" , price : 90}))
 7



console.log(store.getState())

