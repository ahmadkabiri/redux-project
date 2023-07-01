import { addArticle,removeArticle } from "./actionType.js"



 const articlesReducer = (state=[],action) => {

    switch(action.type) {
        case addArticle : {
            let newArticle = action.payload 
            return [...state,newArticle]

        }

        case removeArticle : {
            const newState = [...state].filter(product => product.id !==action.id)
            return newState

        }
        default : {
            return state ;
        }
    }

}

export default articlesReducer