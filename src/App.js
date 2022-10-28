import logo from "./logo.svg"
import "./App.css"
import Welcome from "./components/Welcome"
import Clock from "./components/Clock"
import { useState } from "react"
import LoginControl from "./components/LoginControl"
import Blog from "./components/Blog"
import Form from "./components/Form"
import Search from "./components/Search"
import List from "./components/List"

function App() {
  const [flag, setflag] = useState(true)
  const [searchTerm, setSearchTerm] = useState()
  const handleSearch = e => {
    setSearchTerm(e.target.value)
  }

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
    },
    {
      id: 4,
      title: "Run App",
      content: "You can run React app with npm start"
    },
    {
      id: 5,
      title: "Build Components",
      content: "You can run React app with npm start"
    },
    {
      id: 6,
      title: "Define States",
      content: "You can run React app with npm start"
    },
    {
      id: 7,
      title: "Forms Handling",
      content: "You can run React app with npm start"
    }
  ]

  const filterList = posts.filter(item => {
    return item.title.toLowerCase().includes(searchTerm)
  })

  return (
    <>
      {/* <button onClick={() => setflag(!flag)}>Toggle Clock Component</button>
      {flag ? <Clock /> : "No Clock Component"} */}
      {/* <Welcome user="Danny" />
      <Welcome user="Luke" />
      <Welcome user="Jake" /> */}
      {/* <LoginControl /> */}
      {/* <Blog posts={posts} /> */}
      {/* <Form /> */}
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <List list={filterList} />
    </>
  )
}

export default App
