import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term : ''
        };
    }
    
    render() {
        return (<div className= 'search-bar'>
                <h1 className="Title">PurpleTV</h1>
            <input onChange = { event => this.onInputChange(event.target.value)} />
        </div>
        );
    }
    
    onInputChange(term){
        this.setState({term});
        this.props.onChange(term);
    }
}

export default SearchBar;
    // onInputChange(event){
    //     console.log(event.target.value);
    // }