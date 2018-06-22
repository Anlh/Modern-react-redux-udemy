import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDJSosuBDU0rOX__G8oAv3qOCUrYg2CYaY';

// IMPORTANT: The way that react work with fetched data is: The most parent container should be the one that is responsible to fetch the data
// to their child components
// In this case for our youtube search app. App root component should be the one that handle this

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({
                videos, // equal to {videos: videos} ES5 syntax
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetail videos={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
