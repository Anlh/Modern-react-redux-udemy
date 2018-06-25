import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = ''; // Copy paste your youtube api search key credentials

// IMPORTANT: The way that react work with fetched data is: The most parent container should be the one that is responsible to fetch the data
// to their child components
// In this case for our youtube search app. App root component should be the one that handle this

class App extends Component {
    // This will store a copy of the function passed by, and will set a delay of 300 milliseconds to it
    // This function will only be returned after that time
    _videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            term: ''
        };

        this.videoSearch('Kygo');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos, // equal to {videos: videos} ES5 syntax
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar
                    /* We need to throttle this video search otherwise the UI will be laggy*/
                    onSearchTermChanged={this._videoSearch}
                />
                <VideoDetail videos={this.state.selectedVideo}/>
                <VideoList
                    /* Create new videoList property and pass an anonymous function that will change the state of selected video property*/
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
