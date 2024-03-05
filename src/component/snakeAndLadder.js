import { useState } from "react"

const SnakeAndLadder = () => {
    const [num, Setnum] = useState(0)
    const [count, Setcont] = useState(0)
    const getnumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
    const rollDice = () => getnumber(1, 6)
    const handleGame = () => {
        getnumber()
        rollDice()
        Setnum(rollDice())
        if (count === 100 || count > 100) {
            Setcont(100)
        } else {
            Setnum(num + 1)
            Setcont(count + rollDice())
        }

    }
    const resatgame = () => {
        Setnum(0)
        Setcont(0)
    }
    const gameLength = (i) => {
        const game = []
        for (let j = i; j >= 1; j--) {
            game.push(j)
        }
        return game
    }


    return (
        <>

            <div className="countdev">
                {gameLength(100).map((value, index) => [
                    <>
                        <div className={` ${value ? "border border-success" : ""} singledev  rounded 
                        ${count === value ? "bg-active text-white" : ""}`} key={index}>
                            {value}
                        </div>
                        {(value - 1) % 10 === 0 && <br />}
                    </>
                ])}
            </div >
            <button onClick={() => handleGame()}>Roll Dice</button>
            <h3>{count}</h3>
            <button onClick={() => resatgame()}>reset Game</button>

        </>
    )
}
export default SnakeAndLadder