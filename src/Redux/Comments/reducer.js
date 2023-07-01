import { addComment,removeComment } from "./actionType.js"



const commentsReducer = (state=[],action) => {

    switch(action.type) {
        case addComment : {
            let newComment = action.payload 
            return [...state,newComment]

        }

        case removeComment : {
            const newState = [...state].filter(product => product.id !==action.id)
            return newState

        }
        default : {
            return state ;
        }
    }

}

export default commentsReducer