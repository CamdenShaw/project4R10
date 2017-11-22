// NAME YOUR ACTIONS
const getCodeOfConductBegin = () => {
    return { type: "GET_CODE_OF_CONDUCT_BEGIN"}
}
const getCodeOfConductSuccess = (items) => {
    return {
        type: "GET_CODE_OF_CONDUCT_SUCCESS",
        items
        }
}
const getCodeOfConductFail = (error) => {
    return {
        type: "GET_CODE_OF_CONDUCT_FAIL",
        error
    }
}
// CREATE SOME ACTION CREATORS
export const getCodeItems = () => {
    return (dispatch) => {
        dispatch(getCodeOfConductBegin());
        fetch('https://r10app-95fea.firebaseio.com/code_of_conduct.json')
            .then(resp => resp.json())
            .then(items => {
                dispatch(getCodeOfConductSuccess(items))
            })
            .catch(err => {
                dispatch(getCodeOfConductSuccess(err))
            })
    }
}
// MAKE AN ASYNC ACTION CREATOR
const initialState = {
    error: "",
    codeOfConduct: [],
    isLoading: false
}
// CREATE AND EXPORT YOUR REDUCER
export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_CODE_OF_CONDUCT_BEGIN':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_CODE_OF_CONDUCT_SUCCESS':
            return {
                ...state,
                codeOfConduct: action.items,
                isLoading: false
            }
        case 'GET_CODE_OF_CONDUCT_FAIL':
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default:
            return state
    }
}