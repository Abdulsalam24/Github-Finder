import { createContext, useReducer } from "react";

import githubReducer from "./GithubReducer";

const GihubContext = createContext()

export const GithubProvider = ({ children }) => {

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)


    return (
        <GihubContext.Provider value={{
            ...state,
            dispatch,
        }}>
            {children}
        </GihubContext.Provider>
    )
}


export default GihubContext