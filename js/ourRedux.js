
const reducer = (state = [] , action) => {
    switch (action.type) {

        case "ADD_TODO" : {

            let newTodo = {
                id : action.title === "Learn Reduxjs" ? 3 : crypto.randomUUID(),
                title : action.title,
            }

            return [...state,newTodo]
        }

        case "REMOVE_TODO" : {
            let newState = [...state].filter(todo => todo.id !== action.id)
            return newState ;
        }

        default : {
            return state
        }
    }
}


const createStore = (reducer) => {

    let state ;

    function dispatch (action) {
        state = reducer(state,action)
    }

    function getState () {
        return state
    }

    return {
        dispatch,
        getState
    }

} 



let store = createStore(reducer) ;



store.dispatch({
    type : "ADD_TODO" ,
    title : "Learn Js"
})

store.dispatch({
    type : "ADD_TODO" ,
    title : "Learn Reactjs"
})

store.dispatch({
    type : "ADD_TODO" ,
    title : "Learn Reduxjs"
})



console.log(store.getState())


store.dispatch({
    type : "REMOVE_TODO" ,
    id: 3
})


console.log(store.getState())

