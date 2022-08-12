import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GihubContext = createContext()
const GITHUB_API = process.env.REACT_APP_GITHUB_API

export const GithubProvider = ({ children }) => {

    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    console.log(state.users, 'itemss')


    const searchUser = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_API}/search/users?${params}`);
        const { items } = await response.json();

        dispatch({
            type: 'FETCH_USER',
            payload: items
        })
    };


    const clearUser = () => {
        setLoading()

        dispatch({
            type: 'CLEAR_USER',
        })
        console.log(state.users , 'clear')
    };


    
    const viewUser = async (id) => {
        // const response = await fetch(`${GITHUB_API}/search/users?${id}`);
        // const { items } = await response.json();

        // dispatch({
        //     type: 'VIEW_USER',
        //     payload: items
        // })
    };
    
    const setLoading = () => {
        return dispatch({ type: 'SET_LOADING' })
    }

    return (
        <GihubContext.Provider value={{ searchUser, clearUser, viewUser, users: state.users, loading: state.loading }}>
            {children}
        </GihubContext.Provider>
    )
}


export default GihubContext