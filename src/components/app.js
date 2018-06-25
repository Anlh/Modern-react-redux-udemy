import React, {Component} from 'react';

import BookList from '../containers/book-list-container'

export default class App extends Component {
    render() {
        return (
            <div>
                <BookList/>
            </div>
        );
    }
}