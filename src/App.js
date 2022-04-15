import React, { useState } from "react"
import "./style.css"
import Die from "./Die"
import getKey from "./Getkey"

export default function App() {
    const [dice, setDice] = useState(allNewDice())

    function allNewDice() {
        let diceArray = []
        for (let i = 0; i < 10; i++) {
            diceArray.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: getKey()
            })
        }
        console.log(diceArray)
        return diceArray
    }

    function rollDice() {
        setDice(allNewDice())
    }

    const diceElements = dice.map(die =>  
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
        /> )

    return (
        <main className="App">
            <h1 className="title">Tenzies</h1>
            <div className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</div>
            <div className="dice-container">
               {diceElements}
            </div>
            <button className="roll-btn" onClick={rollDice}>Roll</button>
        </main>
    )
}