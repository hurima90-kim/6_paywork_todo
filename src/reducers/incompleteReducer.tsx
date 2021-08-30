import { Reducer } from 'redux';
import { deleteTodoAction, markCompleteAction, markInCompleteAction } from 'action/actionTypes';
import { incomplete } from 'types/storeType'

const initialState: incomplete = [];

const incompleteReducer: Reducer<incomplete, deleteTodoAction | markCompleteAction | markInCompleteAction> = (state = initialState, action) => {
    switch(action.type) {
        case "MARK_INCOMPLETE":
            return [...state, action.todo];
        case "DELETE_TODO":
        case "MARK_COMPLETE":
            return [...state.filter((todo) => todo !== action.todo)];
        default :
            return [...state];
    }
}

export default incompleteReducer