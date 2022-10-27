import logo from "./logo.svg"
import "./App.css"

function App() {
  function formatUser(user) {
    return user.firstname + " " + user.lastname
  }

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatUser(user)}</h1>
    }
    return <h1>Hello, Stranger</h1>
  }
  const user = {
    firstname: "Danny",
    lastname: "Rodriguez"
  }
  // const element = <h1>Welcome to React Course</h1>
  return (
    <div>
      <div>{getGreeting(user)}</div>
    </div>
  )
}

export default App
