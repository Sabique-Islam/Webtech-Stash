import './App.css'

function App() {

  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ]

  return (
    <>
    {/* <span className='header'>Fill It !!!</span>
    <form className='form'>
      <input type="text" placeholder='Username' />
      <input type="password" placeholder='Password' />
      <button type='submit'>Submit</button>
    </form> */}

    <h2>User List</h2>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    </>
  )
}

export default App
