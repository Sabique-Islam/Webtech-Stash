import {useEffect, useState} from 'react';

export default function JsonFetch(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [])
    return(
        <>
            <h1><strong>Posts :</strong></h1>
            <ul>
                {data.map((post)=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    );
}