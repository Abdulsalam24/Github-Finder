import { createContext, useState } from "react";


const GihubContext = createContext()


export const GithubProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_API}/users`);
        const data = await response.json();
        setUsers(data);
        setLoading(false);
        console.log(data);
    };

    


    return (
        <GihubContext.Provider value={{users , fetchUser , loading}}>
            {children}
        </GihubContext.Provider>
    )
}


export default GihubContext