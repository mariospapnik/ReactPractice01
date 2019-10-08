import React,{useState} from "react"
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"


function App(){

  const [result,setResult] = useState()
  console.log("render App")

  const getResult = (token) => {
    setResult(token)
  }

  console.log("render App After")
  
  return (
    <div className='container'>
    <div className="d-flex flex-column bd-highlight mb-3 justify-content-center">
      <NavBar/>
      <SearchBar getResult = {getResult} />
      <SearchResults result = {result} />  
    </div>
    </div>
  )
        }

export default App;
