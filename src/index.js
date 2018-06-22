import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import Clock from './components/Clock';

const API_KEY = 'AIzaSyDJSosuBDU0rOX__G8oAv3qOCUrYg2CYaY';

// Create a new component. This component should produce
// Some HTML
const App = () => {
    // JSX is an javascript extension/dialect that let us write html in js file and transform it on pure javascript syntax, we can see this transformation using for example the babel sandbox on their website
    return (
        <div>
            <SearchBar/>
            {/*<Clock/>*/}
        </div>
    );
};

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
