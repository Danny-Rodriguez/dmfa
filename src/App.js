import logo from "./logo.svg"
import "./App.css"
import Welcome from "./components/Welcome"
import Clock from "./components/Clock"

function App() {
  const userInfo = {
    firstname: "Danny",
    lastname: "Rodriguez"
  }
  return (
    <>
      <Clock />
      {/* <Welcome user="Danny" />
      <Welcome user="Luke" />
      <Welcome user="Jake" /> */}
    </>
  )
}

export default App
