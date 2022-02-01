import { useState } from "react";

import styles from '../../styles/game/Dice.module.scss';

const Dice = () => {
    const [diceValue, setDiceValue] = useState('');

    const handleDice = () => {
        let diceRoll = rollTheDice(4, 1);
        console.log(diceRoll);
        if (diceRoll === 1) {
            setDiceValue("Descargas una caja de galletas azules 🍪");
        }
        else if (diceRoll === 2) {
            setDiceValue("Descargas un huevo de rana (con mucho cuidado) 🥚");
        }
        else if (diceRoll === 3) {
            setDiceValue("Descargas una rana 🐸");
        }
        else {
            setDiceValue("Grogu se mueve una casilla 👣");
        }
    }
    const rollTheDice = (max, min) => {
        return Math.round(Math.random() * (max - min) + min);
    }


    return (
        <section>
            <p className={styles.play_move}>{diceValue}</p>
            <button onClick={handleDice}>Lanzar el dado</button>
        </section>
    )
}
export default Dice;