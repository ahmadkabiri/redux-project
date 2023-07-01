import { addComment,removeComment } from "./actionType.js";


const addCommentAction = (data) => {
    return {
        type : addComment ,
        payload : data 
    }
}


const removeCommentAction = (id) => {
    return {
        type : removeComment ,
        id
    }
}

export {addCommentAction,removeCommentAction}