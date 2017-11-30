const getFavsBegin = () => {
    return { type: "GET_FAVS_BEGIN" }
}
const getFavsSuccess = items => {
    return {
        type: "GET_FAVS_SUCCESS",
        items
    }
}
const getFavsFail = error => {
    return {
        type: "GET_FAVS_FAIL",
        error
    }
}

export const getFavs = () => {
    return dispatch => {
        dispatch(getFavsBegin())
        fetch("https://r10app-95fea.firebaseio.com/sessions.json")
            .then(resp => resp.json())
            .then(items => {
                dispatch(getFavsSuccess(items))
            })
            .catch(err => {
                dispatch(getFavsFail(err))
            })
    }
}

const initialState = {
    error: "",
    Favs: [],
    isLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_FAVS_BEGIN":
            return {
                ...state,
                isLoading: true
            }
        case "GET_FAVS_SUCCESS":
            return {
                ...state,
                Favs: action.items,
                isLoading: false
            }
        case "GET_FAVS_FAIL":
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default:
            return state
    }
}
