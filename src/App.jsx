import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
export default function App() {

  const [userName,setUserName] =React.useState("Job")
  return (
    <main>
    <Header userName={userName} />
    <Main userName={userName} />
    </main>
  )
}



