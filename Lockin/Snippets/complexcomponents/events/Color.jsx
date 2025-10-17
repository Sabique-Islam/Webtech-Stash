import {useState} from 'react';

export default function Color(){
    const [color, setColor] = useState("");
    return(
        <div className="events">
            <h1 style ={{color: color}}>Hello, {color}</h1>
            <button onClick={()=>{
                setColor("lightblue")
            }}>Blue</button>
        </div>
    )
}