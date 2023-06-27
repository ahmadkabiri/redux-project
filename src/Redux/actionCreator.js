import { counterIncrement , counterDecrement , counterSetZero } from "./actionTypes.js"


const incrementAction = () => {
    return {type:counterIncrement}
}

const decrementAction = () => {
    return {type:counterDecrement}
}

const setZeroAction = () => {
    return {type:counterSetZero}
}


export {incrementAction,decrementAction,setZeroAction}





