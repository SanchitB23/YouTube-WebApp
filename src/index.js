import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

//Files from Project Imports here
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// import icon from './assets/giphy.gif';

const API_KEY = "AIzaSyBOxhUdYAx92dxB3sLDBrJbaXql74gVESs"; //Youtube API_KEY Check Readme.md


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos:[] ,
      selectedVideo : null
    };
    this.videoSearch('Pubg');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos,
        selectedVideo : videos[0]
      });
      //^ this means this.setStates({videos:videos})    Its done when key and value have the same name
    });
  }

  render() {
    const videoSearch = _.debounce((term) =>{this.videoSearch(term)},300);
    return(
      <div>
        <h1 className='page-title'>The New Youtube</h1>
       <SearchBar onSearchTermChange={videoSearch}/>
       <VideoDetail video = {this.state.selectedVideo} />
       <VideoList
         onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
         videos = {this.state.videos}/>
     </div>
    );
  }
}
ReactDOM.render(<App />,document.querySelector('.container'));
