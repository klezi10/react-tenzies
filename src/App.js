import React, { useState, useEffect } from "react"
import "./style.css"
import Die from "./Die"
import getKey from "./Getkey"

export default function App() {
    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)

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
        if (!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld === false ? generateNewDice() : die
            }))
        } else {
            setTenzies(false)
            setDice(allNewDice())
        } 
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

        useEffect(() => {
            const allHeld = dice.every(die => die.isHeld)
            const firstValue = dice[0].value
            const allSameValue = dice.every(die => die.value === firstValue)
            if (allHeld && allSameValue) {
                setTenzies(true)
            }
        }, [dice])

        // if (tenzies) {
        //     restartGame()
        // }

        // function restartGame() {
        //     setTenzies(false)
        //     setDice(allNewDice())
        // }

    return (
        <main className="App">
            <h1 className="title">{tenzies ? "You got it!" : "Tenzies"}</h1>
            <div className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</div>
            <div className="dice-container">
               {diceElements}
            </div>
            <button className="roll-btn" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}