import { useState } from "react";

export default function Damn(){
    const [color, setColor] = useState(false)

    const changeColor = ()=>{
        setColor(!color);
        const btn = document.querySelector("button");
        if(!color){
            btn.style.backgroundColor = "red";
            btn.style.color = "yellow";
        }else{
            btn.style.backgroundColor = "black";
            btn.style.color = "pink";
        }
    }

    return(
        <>
        <button onClick={changeColor}>Click Me</button>
        </>

    );
};