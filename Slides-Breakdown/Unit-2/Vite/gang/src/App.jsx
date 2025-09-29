import './App.css'
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App name="Big Smoke"/>)

function App(props) {
  return (
    <h1>Hello {props.name}!</h1>
  );
}

export default App;
