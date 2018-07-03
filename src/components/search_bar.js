import React,{Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''};
  }
  render() {
    return (
      <div className="search-bar">
        <input onChange={(event) => this.onInputChange(event.target.value)}/> {/*Short hand of defining and calling function onInputChange (Similar to lambda function in .py)*/ }
        {/* Value of the input : {this.state.term} */}
      </div>
    );
  }
  // onInputChange(event){
  //   console.log(event.target.value);
  //}
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
