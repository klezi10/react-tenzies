import React from "react"
import "./style.css"
import Die from "./Die"

export default function App() {
    return (
        <main className="App">
            <div className="dice-container">
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="6" />
            </div>
        </main>
    )
}