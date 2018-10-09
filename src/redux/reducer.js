const initialState = {
    number: 0
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export function increment () {
    return {
        type: INCREMENT
    }
}

export function decrement () {
    return {
        type: DECREMENT
    }
}

export default function reducer ( state=initialState, action ) {
    switch (action.type) {
        case INCREMENT: return Object.assign({}, state, {number: state.number + 1})
        case DECREMENT: return {...state, number: state.number - 1}
        default: return state;
    }
}