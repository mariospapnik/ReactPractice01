import React from "react"
import MenuBar from "../src/MenuBar"


function App(){

  
      return (
        <div className="container">
          {/* <section className="section">
            <input type="text" className="text-center list-group-item list-group-item-action flex-column align-items-start" aria-label="Large" aria-describedby="inputGroup-sizing-m"
            id="SearchBar" onChange={this.handleChange} placeholder="Search..." /> 
            <TokensList tokens={this.state.items} element={this.handleElement}/>
          </section> */}

            {/* <section>
              {element}
            </section> */}
        <TopAppBar
        title='San Francisco, CA'
        navigationIcon={<MaterialIcon
          icon='menu'
          onClick={() => console.log('click')}
        />}
          actionItems={[
            <MaterialIcon icon='file_download' />,
            <MaterialIcon icon='print' />,
            <MaterialIcon icon='bookmark' />,
          ]}
        />
        </div>
    )
        }

export default App;
