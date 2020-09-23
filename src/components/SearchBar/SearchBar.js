import React from 'react';
import './SearchBar.css';

const sortByOptions = {
   'Best Match': 'best_match',
   'Highest Rated': 'rating',
   'Most Reviewed': 'review_count'
 };

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term: (''),
      location: ('') ,
      sortBy: 'best_match',
    };
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  getSortByClass(sortByOption){
      if (this.state.sortBy === sortByOption){
        return 'active';
      }else{
        return ('');
      }
  }
  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption,
    });
  }
  handleTermChange(event){
    this.setState({
      term: event.target.value,
    });
  }
  handleLocationChange(event) {
    this.setState({
      location: event.target.value,
    });
  }
  handleSearch(event) {
        if (this.state.term === '' || this.state.location === '') {
            alert('Please enter both a restaurant and a location!');
            return;
        }

        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionsValue = sortByOptions[sortByOption];
      return <li onClick={this.handleSortByChange.bind(this, sortByOptionsValue)} className={this.getSortByClass(sortByOptionsValue)} key ={sortByOptionsValue}>{sortByOption}</li>
    });
  }


render() {
  return (
    <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" onChange={this.handleTermChange} onKeyDown={this.handleKeyPress} />
    <input placeholder="Where?" onChange={this.handleLocationChange} onKeyDown={this.handleKeyPress} />
  </div>
  <div className="SearchBar-submit" onClick={this.handleSearch}><span>Let's Go</span>

  </div>
</div>
    )
  }
}
export default SearchBar;
