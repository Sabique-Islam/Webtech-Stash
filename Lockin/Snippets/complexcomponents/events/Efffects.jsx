import {useState, useEffect} from 'react';

export default function Efffects(){
    const [a, setA] = useState(0);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setA(a+1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [a]);

    useEffect(() => {
        document.title = `You clicked ${a} times`
    }, [a]);
    return(
        <>
            <h2>Count : {a}</h2>
            <button onClick={()=>setA(a+1)}>Update</button>
        </>
    );
}