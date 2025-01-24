import React from "react"
import BlogList from "./components/BlogList"
import Navbar from "./components/Navbar"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1>My Blog</h1>
      </header>
      <main>
        <BlogList />
      </main>
    </div>
  )
}

export default App

