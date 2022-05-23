import {CREATE, UPDATE, DELETE, FETCH_ALL, LIKE } from '../constants/actionTypes';
const reducer = (posts = [], action) => {
    switch (action.type) {
        case DELETE: 
            return posts.filter(post => post._id !== action.payload.id)
        case UPDATE: 
            return posts.map((post) => post._id === action.payload._id ? action.payload: post)
        case LIKE:
            let updatedPost = action.payload 
            return posts.map((post) => post._id === action.payload._id ? {...post, updatedPost}: post)
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [
                ...posts,
                action.payload
            ]
        default:
            return posts;
    }
}

export default reducer;