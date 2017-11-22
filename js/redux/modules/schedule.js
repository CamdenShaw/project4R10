
const getScheduleBegin = () => {
    return { type: "GET_SCHEDULE_BEGIN"}
}
const getScheduleSuccess = (items) => {
    return {
        type: "GET_SCHEDULE_SUCCESS",
        items
        }
}
const getScheduleFail = (error) => {
    return {
        type: "GET_SCHEDULE_FAIL",
        error
    }
}

export const getSchedule = () => {
    return (dispatch) => {
        dispatch(getScheduleBegin());
        fetch('https://r10app-95fea.firebaseio.com/sessions.json')
            .then(resp => resp.json())
            .then(items => {
                dispatch(getScheduleSuccess(items))
            })
            .catch(err => {
                dispatch(getScheduleFail(err))
            })
    }
}

const initialState = {
    error: "",
    schedule: [],
    isLoading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_SCHEDULE_BEGIN':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_SCHEDULE_SUCCESS':
            return {
                ...state,
                schedule: action.items,
                isLoading: false
            }
        case 'GET_SCHEDULE_FAIL':
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default:
            return state
    }
}