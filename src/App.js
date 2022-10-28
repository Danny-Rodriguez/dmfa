import logo from "./logo.svg"
import "./App.css"
import Welcome from "./components/Welcome"
import Clock from "./components/Clock"
import { useState } from "react"
import LoginControl from "./components/LoginControl"
import Blog from "./components/Blog"
import Form from "./components/Form"

function App() {
  const [flag, setflag] = useState(true)
  const userInfo = {
    firstname: "Danny",
    lastname: "Rodriguez"
  }

  const posts = [
    {
      id: 1,
      title: "Hello World",
      content: "Welcome to learning React"
    },
    {
      id: 2,
      title: "Installation",
      content: "Installing React"
    },
    {
      id: 3,
      title: "Run App",
      content: "You can run React app with npm start"
    }
  ]

  return (
    <>
      {/* <button onClick={() => setflag(!flag)}>Toggle Clock Component</button>
      {flag ? <Clock /> : "No Clock Component"} */}
      {/* <Welcome user="Danny" />
      <Welcome user="Luke" />
      <Welcome user="Jake" /> */}
      {/* <LoginControl /> */}
      {/* <Blog posts={posts} /> */}
      <Form />
    </>
  )
}

export default App
