import { combineReducers } from 'redux';
import BooksReducer from './books-reducer'

const index = combineReducers({
   books: BooksReducer
});

export default index;