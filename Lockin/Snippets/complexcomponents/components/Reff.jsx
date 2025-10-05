import { useState, useEffect, useRef } from "react";

const Reff = () => {
    const [a, setA] = useState(0);

    // let count = 0;
    const count = useRef(0);

    const btnRef = useRef();

    useEffect(()=>{
        btnRef.current.style.backgroundColor = "red"
    },[])

    useEffect(()=>{
        //count += 1; // wont work cuz the component rerenders each time the button is clicked :)
        console.log(`Count : ${count.current}`)
        count.current += 1;
    }, [a])
  return (
  <div>
    <h1>Count : {a}</h1>
    <button ref={btnRef} onClick={()=>{
        setA(a+1)
    }}>Update</button>
  </div>
  )
};

export default Reff;
