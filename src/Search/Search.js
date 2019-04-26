import React, { Component } from 'react';

import SearchContext from '../SearchContext';

class Search extends Component {

    render() {

        return (
        <SearchContext.Consumer>
            {(data) => {
            return (<div>
                    <form onSubmit={(e) => data.handleSearch(e,data)}>
                        <label>Search:</label>
                        <input  type='text' 
                                name='search' 
                                className='search-bar' 
                                placeholder='e.g Vader'
                                value={data.search}
                                onChange={data.handleFormChange} 
                                required />
                        <button type="submit">search</button>

                        <div className='filter-bar'>
                        <label>Query Type</label>
                        <select name="qType" 
                                id='qType' 
                                value={data.noteFolderSelect} 
                                onChange={data.handleFormChange}>

                            <option value='people'>People</option>
                            <option value='planets'>Planets</option>
                            <option value='species'>Species</option>
                            <option value='films'>Films</option>
                            <option value='vehicles'>Vehicles</option>
                            <option value='starships'>Starships</option>
                        </select>
                        </div>
    
                    </form>
                </div>)
            }}
        </SearchContext.Consumer>
        );
    }
}

export default Search;