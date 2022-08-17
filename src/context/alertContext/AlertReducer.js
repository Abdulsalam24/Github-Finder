const alertReducer = (state, action) => {
    switch (action.type) {
        case "ALERT":
            return {
                ...state, msg: action.payload.msg, type: action.payload.type
            }
        case "ALERT_OFF":
            return {
                ...state, type: ""
            }

        default:
            return state
    }
}

export default alertReducer