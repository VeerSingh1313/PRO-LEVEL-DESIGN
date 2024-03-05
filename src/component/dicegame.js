import { Button } from "bootstrap"
import { useEffect, useState } from "react"
import { Image } from "react-bootstrap"

// import{dice2} from '../component/image/dice2.png'
// import{dice3} from '../component/image/dice3.png'
// import{dice4} from '../component/image/dice4.png'
// import{dice5} from '../component/image/dice5.png'

const DiceGame = () => {
    const [count, setCont] = useState(0)
    const [outcome, setOutcome] = useState(null)
    const [count2, Setcount2] = useState(0)
    const [turn, setturn] = useState(true)
    const reStartGame = () => {
        setCont(0)
        Setcount2(0)
        setturn(true)
    }

    const getNewNumber = () => {
        setturn(false)
        const number = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        const rollDice = () => number(1, 6)
        const newnumber = rollDice()
        setOutcome(newnumber)
        if (newnumber + count < 20) { setCont(newnumber + count) }
        else if (newnumber + count === 20) {
            setCont(20)
            alert('win player1')
            reStartGame()
        }
    }
    const secoundplayernumber = () => {
        setturn(true)
        const number = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        const rollDice = () => number(1, 6)
        const number2 = rollDice()
        setOutcome(number2)

        if (number2 + count2 < 20) {
            Setcount2(count2 + number2)
        }
        else if (number2 + count2 === 20) {
            Setcount2(20)
            alert('win player2')
            reStartGame()


        }


    }


    const images = {
        1: 'https://static.thenounproject.com/png/1194685-200.png',
        2: "https://static.thenounproject.com/png/1194688-200.png",
        3: "https://static.thenounproject.com/png/1194684-200.png",
        4: "https://static.thenounproject.com/png/1194689-200.png",
        5: "https://static.thenounproject.com/png/1194690-200.png",
        6: "https://static.thenounproject.com/png/1194691-200.png",
    }


    const gameLength = (i) => {
        console.log(i, 'lkjhfdsasgj')
        let game = []
        for (let j = 1; j <= i; j++) {
            game.push(j)
        }
        return game
    }

    return (
        <>
            <div className="text-center mt-4">
                <img className="start" src='https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/DICE_%28Ticketing_Company%29_logo.svg/1024px-DICE_%28Ticketing_Company%29_logo.svg.png' /><span className="logo_text mt-4">playground</span>
            </div>
            <div className="mainDice d-flex justify-content-center flex-wrap">

                <div className="numdev d-flex justify-content-center flex-wrap mt-5 ">
                    {gameLength(20).map((item, index) => {
                        return (

                            <div className={`${item ? "border border-success" : ""}  rounded p-3 m-1 
                         ${count === item ? "bg-active text-white" : ""}`} key={index}>{item}</div>

                        )
                    })}</div>
                <div className="numdev d-flex justify-content-center flex-wrap mt-5">
                    {gameLength(20).map((item, index) => {
                        return (

                            <div className={`${item ? "border border-success" : ""}  rounded p-3 m-1 flex-wrap
                         ${count2 === item ? "bg-active text-white" : ""}`} key={index}>{item}</div>

                        )
                    })}</div>

            </div>

            <div className="text-center"><button class="btn btn-success" variant="primary" disabled={!turn} onClick={() => getNewNumber()}>player1</button>
                {outcome > 0 ? <img className="countimg" src={images[outcome]} /> : <img className="countimg" src="https://static.thenounproject.com/png/1194685-200.png" />}
                <button class="btn btn-success" variant="primary" disabled={turn} onClick={() => secoundplayernumber()}>player2</button>
            </div>
            <div className="text-center">
                <button class="btn btn-danger" variant="primary" onClick={() => reStartGame()}>Restart Game</button>

            </div>

        </>
    )
}
export default DiceGame