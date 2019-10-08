import React,{useState} from 'react'

function SearchResults({result}) {

    const [response, setResponse] = useState();

    const getApiCallAsync = async (a)=> {
        const res = await fetch(a);
        await res.json()
        .then(
          (result) => {
            console.log("successful API call");
            setResponse(...result)
          },
          (error) => {
            console.log("failed API call");
            console.log(error);
          }
        );
      }

      const renderResult = ()=>{
        console.log(valueOf({result}))  
          if( valueOf({result})==undefined) {
            console.log("undef")  
            return (
                <div></div>
            )
          }
          
        const d =  "https://astraka.herokuapp.com/astraka/v1/search?name="+{result}
        const a = {result}
        if (valueOf(a).length > 2) {
            getApiCallAsync(d)
        }  
    }

    return(
        <div>
             <div><span> {result} </span></div>
        </div>

    )
}


export default SearchResults