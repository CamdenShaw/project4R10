const getSessionsBegin = () => {
    return { type: "GET_SESSIONS_BEGIN" }
}
const getSessionsSuccess = items => {
    return {
        type: "GET_SESSIONS_SUCCESS",
        items
    }
}
const getSessionsFail = error => {
    return {
        type: "GET_SESSIONS_FAIL",
        error
    }
}

export const getSessions = () => {
    return dispatch => {
        dispatch(getSessionsBegin())
        fetch("https://r10app-95fea.firebaseio.com/sessions.json")
            .then(resp => resp.json())
            .then(data => {
                dispatch(getSessionsSuccess(data))
            })
            .catch(err => {
                dispatch(getSessionsFail(err))
            })
    }
}

const initialState = {
    error: "",
    sessions: [],
    isLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_SESSIONS_BEGIN":
            return {
                ...state,
                isLoading: true
            }
        case "GET_SESSIONS_SUCCESS":
            return {
                ...state,
                sessions: action.items,
                isLoading: false
            }
        case "GET_SESSIONS_FAIL":
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default:
            return state
    }
}
