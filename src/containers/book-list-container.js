import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux'; // Responsible for the flow between the actions trough the reducers

// A container is used as interface between the Redux and React libraries
// The redux is responsible for the data state and the React is responsible for the View(the components)
// The container/smart component is used to connect both reducer and the correspondent component
class BookListContainer extends Component {
    renderList() {
        return this.props.books.map((book, index) => {
            return (
                <li key={index} className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// Whenever the application state changes this function is called
// and the BookListContainer component container re-renders
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside BookListContainer
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);