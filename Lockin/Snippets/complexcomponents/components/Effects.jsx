import { useEffect, useState } from "react"

const Effects = () => {
    const [a, setA] = useState(0);

    //The initial setup runs twice on first time loading due to "StrictMode" in main.jsx, in development it runs the code twice, once for checking then the actual execution

    useEffect(()=>{
        alert("Always Run")
    })

    useEffect(()=>{
        alert("One time")
    }, [])

    useEffect(()=>{
        alert("Gang")

        return ()=>{
          alert("Unmount")
        }
    }, [a])

  return (
    <div>
      <h1>Count : {a}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>Update</button>
    </div>
  )
}

export default Effects;
