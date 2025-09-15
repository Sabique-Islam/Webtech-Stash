function Car(){
    const brand = "BMW";
    const model = "X5";
    return (
        <>
            <h1>Brand -&gt; {brand}</h1>
            <h2>Model -&gt; {model}</h2>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);