import { axiosWithAuth } from '..utils/axiosWithAuth'

export const GET_CLASSES = 'GET_CLASSES'
export const IS_LOADING = 'IS_LOADING'
export const FAILURE = 'FAILURE'
export const IS_ATTENDING = 'IS_ATTENDING'

export const getClasses = () => {
    return (dispatch) => {
        dispatch(({ type: IS_LOADING }))
        axiosWithAuth()
            .get('/api/classes')  
            .then(res => {
                dispatch({ type: GET_CLASSES, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FAILURE, payload: err.message })
            })
    }
}
export const isAttending = (userID, classID) => {
    return (dispatch) => {
        axiosWithAuth()
            .post('', { userID, classID })
            .then(res => {
                dispatch({ type: IS_ATTENDING, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FAILURE, payload: err.message })
            })
    }
}


