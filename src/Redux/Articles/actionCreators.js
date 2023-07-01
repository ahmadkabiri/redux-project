import { addArticle,removeArticle } from "./actionType.js";


const addArticleAction = (data) => {
    return {
        type : addArticle ,
        payload : data 
    }
}


const removeArticleAction = (id) => {
    return {
        type : removeArticle ,
        id
    }
}

export {addArticleAction,removeArticleAction}