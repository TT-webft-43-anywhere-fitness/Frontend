import { axiosWithAuth } from '..utils/axiosWithAuth'

export const ADD_CLASS = 'ADD_CLASS'    //POST
export const DELETE_CLASS = 'DELETE_CLASS'//DELETE
export const FOUND_CLASSES = 'FIND_CLASSES' //GET
export const IS_LOADING = 'IS_LOADING'
export const EDIT_CLASS = 'EDIT_CLASS' //PUT
export const FAILURE = 'FAILURE'  //ERROR CATCH

export const editClass = (item, id) => {
    return (dispatch) => {
        axiosWithAuth()
            .put('/api/classes', id, item)
            .then(res => {
                dispatch({ type: EDIT_CLASS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FAILURE, payload: err.message })
            })
    }
}

export const addClass = (item) => {
    return (dispatch) => {
        axiosWithAuth()
            .post('/api/classes', item) 
            .then(res => {
                dispatch({ type: ADD_CLASS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FAILURE, payload: err.message })
            })
    }
}

export const deleteClass = (id) => {
    return (dispatch) => {
        axiosWithAuth()
            .delete('/api/classes', id) 
            .then(res => {
                dispatch({ type: DELETE_CLASS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FAILURE, payload: err.message })
            })
    }
}

export const findingClasses = (instID) => {
    return (dispatch) => {
        dispatch(({ type: IS_LOADING }))
        axiosWithAuth()
            .get(`/api/users/${instID}/classes`) 
            .then(res => {
                dispatch({ type: FOUND_CLASSES, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FAILURE, payload: err.message })
            })
    }
}
