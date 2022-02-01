import { useState } from "react";

import styles from '../../styles/game/Dice.module.scss';

const Dice = (props) => {
    const [diceValue, setDiceValue] = useState({
        numValue: "",
        playValue: ""
    });

    const handleDice = () => {
        let diceRoll = rollTheDice(4, 1);
        console.log(diceRoll);
        if (diceRoll === 1) {
            setDiceValue({ numValue: 1, playValue: "Descargas una caja de galletas azules 🍪" });
            props.handleDiceValue(diceRoll);
        }
        else if (diceRoll === 2) {
            setDiceValue({ numValue: 2, playValue: "Descargas un huevo de rana (con mucho cuidado) 🥚" });
            props.handleDiceValue(diceRoll);
        }
        else if (diceRoll === 3) {
            setDiceValue({ numValue: 3, playValue: "Descargas una rana 🐸" });
            props.handleDiceValue(diceRoll);
        }
        else {
            setDiceValue({ numValue: 4, playValue: "Grogu se mueve una casilla 👣" });
            props.handleDiceValue(diceRoll);
        }
    }
    const rollTheDice = (max, min) => {
        return Math.round(Math.random() * (max - min) + min);
    }


    return (
        <section className={styles.dice_section}>
            <p className={styles.play_move}>{diceValue.playValue}</p>
            <button className={styles.button} onClick={handleDice}>Lanzar el dado</button>
        </section>
    )
}
export default Dice;