import * as types from '../types';

const initialState = {
    isLoggedIn: false,
    token: false,
    user: {},
    isLoading: false,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.LOGIN_HOSPITAL_SUCCESS: {
            const newState = {...state};
            newState.isLoggedIn = true;
            newState.token = action.payload.token;
            newState.user = action.payload.user;
            return newState;
        }
        
        case types.LOGIN_HOSPITAL_FAILURE: {
            const newState = {...initialState};
            return newState;
        }
        
        case types.LOGIN_PACIENTE_SUCCESS: {
            const newState = {...state};
            newState.isLoggedIn = true;
            newState.token = action.payload.token;
            newState.user = action.payload.user;
            return newState
        }

        case types.LOGIN_PACIENTE_FAILURE: {
            const newState = {...initialState};
            return newState;
        }
            
        default:
            return state;
    }
};