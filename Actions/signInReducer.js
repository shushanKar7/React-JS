import { SIGN_IN } from "./signInAction"

const initialState = {
    isShown: false
}

export function signInReducer (state=initialState, action) {
    switch(action.type) {
       case SIGN_IN :
           return {
               ...state,
               isShown: true
           }
        default: return state
    }
}