import React from 'react'



function SearchBar() {

    // handleChange() {
        
    // }

    return (
        <div className='d-flex justify-content-center'>
        <input type="text" 
        className="text-center list-group-item list-group-item-action " 
        aria-label="Large" aria-describedby="inputGroup-sizing-m"
        id="astraka-search-bar" 
        // onChange={handleChange} 
        placeholder="Search..." /> 
        {/* <TokensList tokens={this.state.items} element={this.handleElement}/> */}
        </div>
        
    )
}


export default SearchBar