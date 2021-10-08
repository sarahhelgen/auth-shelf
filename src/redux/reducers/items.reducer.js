const itemsReducer = (state = [], action) => {
    // console.log( 'itemsReducer - ', action.payload); // Nothing
    
    switch (action.type) {
        case 'SET_ITEMS':
            return action.payload;
        default:
            return state;
    }
}

export default itemsReducer;