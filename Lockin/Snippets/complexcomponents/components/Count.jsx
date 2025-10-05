import { useState } from "react";
import "./Count.css"

const Count = () => {
    const [count, setCount] = useState(0);
    // let a = 5 -> nope cuz once we render 5, the updated value wont reflect in the frontend

    return(
        <>
            <div className="count">The Count -&gt; {count}</div>
            <button onClick={()=>{
                setCount(count+1)
            }}>
                Update Count
            </button>
        </>
    )
}

export default Count;

// This component is exported as the default export of the file.
// That means when importing it elsewhere, you don’t need curly braces:
//
//   import Count from "./Count";
//
// If we instead used a named export (export const Count = ...),
// then it would have to be imported with curly braces:
//
//   import { Count } from "./Count";