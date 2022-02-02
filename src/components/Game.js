import Dice from "./game/Dice";
import Main from "./Main";

import styles from '../styles/game/Game.module.scss';

import { useState } from "react";

const Game = () => {
    const [diceValue, setDiceValue] = useState({
        numValue: "",
        playValue: ""
    });
    const [cookies, setCookies] = useState(0);
    const [eggs, setEggs] = useState(0);
    const [frogs, setFrogs] = useState(0);
    const [grogu, setGrogu] = useState(0);


    const handleDiceValue = (diceRoll) => {
        console.log(diceRoll);
        if (diceRoll === 1) {
            setDiceValue({ numValue: 1, playValue: "Descargas una caja de galletas azules 🍪" });
            if (cookies < 3) {
                setCookies(cookies + 1);
            }
        }
        else if (diceRoll === 2) {
            setDiceValue({ numValue: 2, playValue: "Descargas un huevo de rana (con mucho cuidado) 🥚" });
            if (eggs < 3) {
                setEggs(eggs + 1);
            }
        }
        else if (diceRoll === 3) {
            setDiceValue({ numValue: 3, playValue: "Descargas una rana 🐸" });
            if (frogs < 3) {
                setFrogs(frogs + 1);
            }
        }
        else {
            setDiceValue({ numValue: 4, playValue: "Grogu se mueve una casilla 👣" });
            if (grogu < 3) {
                setGrogu(grogu + 1);
            }
        }
    }
    return (
        <Main>
            <div>
                Juego
            </div>
            <section>
                <div>Grogu</div>
                <div>[]</div>
                <div>[]</div>
                <div>[]</div>
                <div>[]</div>
                <div>[]</div>
                <div>[]</div>
                <div className={styles.merch_cupboard}>
                    <div className={styles.merch_item1}>
                        Caja de galletas x 3
                    </div>
                    <div className={styles.merch_item2}>
                        Rana x 3
                    </div>
                    <div className={styles.merch_item3}>
                        Huevo de rana x 3
                    </div>
                </div>
            </section>
            <Dice handleDiceValue={handleDiceValue} diceValue={diceValue} />
        </Main>
    )
}
export default Game;