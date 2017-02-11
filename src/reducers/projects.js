import { FETCH_PROJECTS, ADD_PROJECT, UPDATE_PROJECT } from './action-types'

const byId = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PROJECTS:
            const newState = { ...state }
            action.response.forEach(project => newState[project.id] = project)
            return newState
        case ADD_PROJECT:
        case UPDATE_PROJECT:
            return { 
                ...state,
                [action.response.id]: action.response, 
            }
        default: return state
    }
}

export default byId