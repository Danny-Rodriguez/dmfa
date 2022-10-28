import logo from "./logo.svg"
import "./App.css"
import Welcome from "./components/Welcome"
import Clock from "./components/Clock"
import { useState } from "react"
import LoginControl from "./components/LoginControl"

function App() {
  const [flag, setflag] = useState(true)
  const userInfo = {
    firstname: "Danny",
    lastname: "Rodriguez"
  }

  // const toggle = () => {
  //   console.log("Toggle Clicked")
  //   setflag(!flag)
  // }

  return (
    <>
      {/* <button onClick={() => setflag(!flag)}>Toggle Clock Component</button>
      {flag ? <Clock /> : "No Clock Component"} */}
      {/* <Welcome user="Danny" />
      <Welcome user="Luke" />
      <Welcome user="Jake" /> */}
      <LoginControl />
    </>
  )
}

export default App
