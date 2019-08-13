import React, { Component } from 'react'

class SearchBar extends Component {
    state= { term: '' };
    
        onInputChange = (e) => {
            this.setState({
                term: e.target.value
            })
        }
        onFormSubmit = (e) => {
            e.preventDefault();

            this.props.onFormSubmit(this.state.term);

        }
        render () {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label> Video Search</label>
                        <input onChange={this.onInputChange} 
                                type="text" 
                                placeholder="Enter the video you want to watch.."
                                value={this.state.term} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar