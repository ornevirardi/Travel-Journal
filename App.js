import React from "react"
import Card from "./components/Card"
import data from "./data"
import Navbar from "./components/Navbar"

export default function App(){
    const cards = data.map(item => {
        return(
            <Card 
            key={item.id}
            item={item}
             />
        )
    })
    return (
        <div>
        <Navbar />
        {cards}
        </div>
    )
    
}
