import { formatObject } from '../../lib/helpers'

const getSpeakerBegin = () => (
    { type: "GET_SPEAKER_BEGIN"}
)
const getSpeakerSuccess = (items) => (
    { 
        type: "GET_SPEAKER_SUCCESS",
        items
    }
)
const getSpeakerFail = (error) => (
    {
        type: "GET_SPEAKER_FAIL",
        error
    }
)

export const getSpeaker = (speakerId) => (
    dispatch => {
        dispatch(getSpeakerBegin())
        fetch(`https://r10app-95fea.firebaseio.com/speakers.json?orderBy=%22speaker_id%22&equalTo=%22${speakerId}%22`)
            .then(resp => resp.json())
            .then(items => {
                dispatch(getSpeakerSuccess(formatObject(items)))
            })
            .catch(err => {
                dispatch(getSpeakerFail(err))
            })
    }
)

const initialState = {
    error: "",
    speaker: [],
    isLoading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_SPEAKER_BEGIN':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_SPEAKER_SUCCESS':
            return {
                ...state,
                speaker: action.items,
                isLoading: false
            }
        case 'GET_SPEAKER_FAIL':
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default:
            return state
    }
}