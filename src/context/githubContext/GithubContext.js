import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GihubContext = createContext()
const GITHUB_API = process.env.REACT_APP_GITHUB_API
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {

    const initialState = {
        users: [],
        user: {},
        repos : [],
        loading: false
    }


    const [state, dispatch] = useReducer(githubReducer, initialState)

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
        dispatch({
            type: 'CLEAR_USER',
        })
    };

    const getUser = async (login) => {
        setLoading()

        const response = await fetch(`${GITHUB_API}/users/${login}`, {
            Headers: {
                Authorization: `token ${TOKEN}`
            }
        });

        const data = await response.json();

        dispatch({
            type: 'GET_USER',
            payload: data
        })
    };

    const getRepos = async (login) => {
        setLoading()

        const response = await fetch(`${GITHUB_API}/users/${login}/repos`, {
            Headers: {
                Authorization: `token ${TOKEN}`
            }
        });

        const data = await response.json();

        dispatch({
            type: 'GET_REPOS',
            payload: data
        })
    }

    const setLoading = () => {
        return dispatch({ type: 'SET_LOADING' })
    }

    return (
        <GihubContext.Provider value={{ searchUser, clearUser, getUser,getRepos, users: state.users, user: state.user, loading: state.loading,repos : state.repos }}>
            {children}
        </GihubContext.Provider>
    )
}


export default GihubContext