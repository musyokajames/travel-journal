import React from "react"
import Navbar from "./components/Navbar"
import "./App.css"
import Card from "./components/Card"
import data from "./data"
console.log(data)

const App = () => {

    const card = data.map(item => {
      return(
        <Card 
          key={item.id}
          item={item}
        />
      )
    })

  return(
    <div> 
      <Navbar />
      {card}
    </div>
  )
}
export default App;
