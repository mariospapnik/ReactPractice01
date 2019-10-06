import React from "react"
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"


function App(){


  
      return (
        <div className='container'>
        <div className="d-flex flex-column bd-highlight mb-3 justify-content-center">
          <NavBar/>
          <SearchBar/>
          
          {/* <section className="section">
            <input type="text" className="text-center list-group-item list-group-item-action flex-column align-items-start" aria-label="Large" aria-describedby="inputGroup-sizing-m"
            id="SearchBar" onChange={this.handleChange} placeholder="Search..." /> 
            <TokensList tokens={this.state.items} element={this.handleElement}/>
          </section> */}

            {/* <section>
              {element}
            </section> */}
        
        </div>
        </div>
    )
        }

export default App;
