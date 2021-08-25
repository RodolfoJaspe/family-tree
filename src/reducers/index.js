import {family} from "../data"

const initialState = {
    tree: family
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state; 
    }
}