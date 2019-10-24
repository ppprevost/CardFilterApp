import ACTIONS from "./action";

export const defaultState = {
    items: [],
    actualFilter:null
};

const todoReducer = (state = defaultState, action:{type:string ,payload:any}) => {
    switch (action.type) {
        case ACTIONS.FETCH_ITEM: {
            return {...state, items:action.payload}
        }
        case ACTIONS.FILTER_ITEM: {
            return {...state, actualFilter:action.payload}
        }
        case ACTIONS.DELETE_FILTER: {
            return {...state, actualFilter:null}
        }
        default:
            return state;
    }
};

export default todoReducer;