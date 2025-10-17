import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

export default function counter(){
    const [a, setA] = useState(0);
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setA(a+1);
    }

    const toggleText = () => {
        setToggle(!toggle);
        const text = document.getElementById("counterValue");
        if(!toggle){
            text.style.color = "red";
        } else {
            text.style.color = "white";
        }
    }
    return(
        <div className="somethingBody">
            <h2>
                Counter : 
                <span id="counterValue">{a}</span>
            </h2>
            <button onClick={handleClick}>Update</button>
            <button onClick={toggleText}>Toggle Text Color</button>
        </div>
    );
}