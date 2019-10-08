import React,{useState} from 'react'



function SearchBar({getResult}) {

    const [token,setToken] = useState(' ')
    console.log("render SearchBar")
    // getResult()

    return (
        <div className='d-flex justify-content-center'>
        <input type="text" 
            className="text-center list-group-item list-group-item-action " 
            aria-label="Large" aria-describedby="inputGroup-sizing-m"
            id="astraka-search-bar" 
            onChange={ (e)=> {
                const newtoken = e.target.value;
                setToken( (newtoken.length > 2)? newtoken : ' ')
                getResult((newtoken.length > 2)? newtoken : ' ')
            }} 
            placeholder="Search..." />
        </div>
        
    )
}


export default SearchBar