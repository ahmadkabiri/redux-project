
// Counter Action 

let incrementAction = {
    type:"incremented",
}

let decrementAction = {
    type :"decrement" ,
}


function counterReducer (action) {
    switch (action.type) {
        case 'increment' : {
            return newStore
        }
        case 'decremet' : {
            return newStore
        }
    }
}






// Todolist actions 

let createTodoAction = {
    type:"ADD_TODO"
}

let removeTodoAction = {
    type:"REMOVE_TODO"
}

let updateTodoAction = {
    type:"UPDATE_TODO"
}

let getTodosAction = {
    type : "GET_TODOS"
}

function todosReducer (action) {
    switch(action.type) {
        case "ADD_TODO" : {
            return newStore
        }
        case "REMOVE_TODO" : {
            return newStore
        }
        case "UPDATE_TODO" : {
            return newStore
        }
        case "GET_TODOS" : {
            return newStore
        }
        default : {
            return store ;
        }

    }
}






let counterStore = 0 ;

// Todolist store 

let todolistStore = [
    {id:1 , title:"learn0" , createdAt : "1402-2-9" , isDO:false},
    {id:1 , title:"learn0" , createdAt : "1402-2-9" , isDO:false}
]


// Shop Store 

let shopStore = {
    products:[] ,
    articles : [] ,
    users : [] ,
    admins : []
}


// shop Reducers = these are sum ok ? 
// هر نوع دیتا ردیوسر خودشو داره

function productReducer (action) {

}

function articleReducer (action) {
    
}

function ticketReducer (action) {
    
}

function usersReducer (action) {
    
}

function adminReducer (action) {
    
}

console.log(Redux)