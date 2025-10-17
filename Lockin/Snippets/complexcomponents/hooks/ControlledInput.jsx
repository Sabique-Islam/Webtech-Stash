import { useState } from "react";

const ControlledInput = () => {
    const [inputValue, setInputValue] = useState("")
  return (
    <div>
        <input 
            type="text" 
            placeholder="type here..." 
            value={inputValue} 
            onChange={(e)=>setInputValue(e.target.value)}
        />
        <p>U typed : {inputValue}</p>
    </div>
  )
};

export default ControlledInput;
