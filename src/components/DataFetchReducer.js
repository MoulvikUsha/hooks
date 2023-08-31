import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

// reducer accepts state and action parametes and returns the updated state
const reducer = (state, action) => {
    switch (action.type) {
        case 'fetch_success':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'fetch_error':
            return {
                loading: false,
                error: 'something went wrong',
                post: {}
            }
        default:
            return state
    }
}
function DataFetchReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({ type: 'fetch_success', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'fetch_error' })
            })
    }, [])
    return (
        <div>
            <div>
                {state.loading ? 'Loading' :state.post.title}
                {state.error ? state.error : null}
            </div>
        </div>
    )
}

export default DataFetchReducer