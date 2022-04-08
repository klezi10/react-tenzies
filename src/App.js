import React, { useState } from "react"
import "./style.css"
import Die from "./Die"


export default function App() {
    const [dice, setDice] = useState(allNewDice())

    function allNewDice() {
        let diceArray = []
        for (let i = 0; i < 10; i++) {
            diceArray.push(Math.ceil(Math.random() * 6))
        }
        return diceArray
    }

    function rollDice() {
        setDice(allNewDice())
    }

    const diceElements = dice.map(die =>  <Die value={die} /> )

    return (
        <main className="App">
            <div className="dice-container">
               {diceElements}
            </div>
            <button className="roll-btn" onClick={rollDice}>Roll</button>
        </main>
    )
}