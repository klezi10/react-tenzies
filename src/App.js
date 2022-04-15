import React, { useState } from "react"
import "./style.css"
import Die from "./Die"
import getKey from "./Getkey"

export default function App() {
    const [dice, setDice] = useState(allNewDice())

    function generateNewDice() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: getKey()
        }
    }

    function allNewDice() {
        let diceArray = []
        for (let i = 0; i < 10; i++) {
            diceArray.push(generateNewDice())
        }
        return diceArray
    }

    function rollDice() {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld === false ? 
            generateNewDice() : die
        }))
    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
            {...die, isHeld: !die.isHeld} : die
        }))
    }

    const diceElements = dice.map(die =>  
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
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