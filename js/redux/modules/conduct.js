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
const getCodeItems = () => {
    return (dispatch) => {
        dispatch(getCodeOfConductBegin());
        return fetch(`$(https://r10app-95fea.firebaseio.com/code_of_conduct.json)`)
            .then(resp => resp.json())
            .then(items => {
                return getCodeOfConductSuccess(items)
            })
            .catch(err => {
                dispatch(getCodeOfConductSuccess(err))
            })
    }
}
// MAKE AN ASYNC ACTION CREATOR
const initialState = {
    codeOfConduct: []
}
// CREATE AND EXPORT YOUR REDUCER
export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_CODE_OF_CONDUCT_BEGIN':
            return {
                ...state
            }
        case 'GET_CODE_OF_CONDUCT_SUCCESS':
            return {
                ...state
            }
        case 'GET_CODE_OF_CONDUCT_FAIL':
            return {
                ...state
            }
        default:
            return state
    }
}