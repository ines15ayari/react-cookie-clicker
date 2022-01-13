import React, {useState} from 'react'
import cookie from './cookie.png'


export default function Main() {
    const [clicks , setClicks ] = useState(0);


    const handleClick= () => {
        console.log('clicked');
        setClicks(clicks+1)
        
        };
    

    return (
        <div>
           <p> Score={clicks}</p>
           <button onClick={(handleClick)}>
               <img  src={cookie} className="App-logo" alt="logo" />
           </button>
           
           
           

        </div>
    )
}


