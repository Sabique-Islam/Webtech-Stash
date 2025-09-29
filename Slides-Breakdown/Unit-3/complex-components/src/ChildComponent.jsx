const ChildComponents = ({name, age, sem}) => {
    return (
        <div>
            <h2>Child Component</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Semester: {sem}</p>
        </div>
    );
}

export default ChildComponents;
