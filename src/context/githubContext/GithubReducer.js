

const githubReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_USER":
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case "GET_USER":
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case "GET_REPOS":
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
            
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }
        case "CLEAR_USER":
            return {
                users: [],
                loading: false
            }





        case "VIEW_USER":
            return {
                ...state,
                users: action.payload.id === state.users.id ? action.payload : state.users,
                loading: false
            }

        default:
            return state
    }
}

export default githubReducer