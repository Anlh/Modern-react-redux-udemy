/**
 *
 * @param state [Is not application state, only the state this reducer is responsible for. State is immutable]
 * @param action
 */
export default function (state = null, action) {

    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}