import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";



const AlertContext = createContext()


export const AlertProvider = ({ children }) => {

    const initialState = {}

    const [state, dispatch] = useReducer(alertReducer, initialState)

    const alertUser = (msg, type) => {
        dispatch({ type: "ALERT", payload: { msg, type } })

        setTimeout(() => dispatch({ type: "ALERT_OFF" }), 3000)
    }

    return (
        <AlertContext.Provider value={{ alertUser, alertMsg: state }}>
            {
                children
            }
        </AlertContext.Provider>
    )
}

export default AlertContext