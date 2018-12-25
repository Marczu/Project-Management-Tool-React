import {GET_PROJECTS, GET_PROJECT} from "../actions/types";

const initialState = {
    projects: [],
    project: {}
};

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_PROJECTS:
            return {
                ...state,
                projects: action.playload
            };
        
        case GET_PROJECT:
            return{
                ...state,
                project: action.playload
            }

        default:
            return state;
    }

}