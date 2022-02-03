import Dice from "./game/Dice";
import Main from "./Main";

import styles from '../styles/game/Game.module.scss';

import { useState } from "react";
import LoadingZone from "./game/LoadingZone";
import FinalScreen from "./game/FinalScreen";

const Game = () => {
    const [diceValue, setDiceValue] = useState({
        numValue: "",
        playValue: ""
    });
    const [cookies, setCookies] = useState(0);
    const [eggs, setEggs] = useState(0);
    const [frogs, setFrogs] = useState(0);
    const [grogu, setGrogu] = useState(0);
    const [groguPosition, setGroguPosition] = useState(-1);
    const [gameStatus, setGameStatus] = useState({
        won: false,
        lost: false
    })
    const [isPlaying, setIsPlaying] = useState(false);

    const handleButton = () => {
        setIsPlaying(true);
    }

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
            if (grogu < 7) {
                setGrogu(grogu + 1);
                setGroguPosition(groguPosition + 1);
            }
        }
        hasWon();
    }

    const hasWon = () => {
        if (cookies === 3 && frogs === 3 && eggs === 3) {
            setGameStatus({ won: true, lost: false });
        }
        else if (grogu === 7) {
            setGameStatus({ won: false, lost: true });
        }
    }


    return (
        <Main>
            {gameStatus.won ? <FinalScreen gameStatus={gameStatus} /> : gameStatus.lost ? <FinalScreen gameStatus={gameStatus} /> : null}
            {isPlaying ?
                <>
                    <section className={styles.spaceship_section}>
                        <div className={styles.grogu}>
                            <img className={grogu === 0 ? styles.grogu_img : styles.hidden} src="https://senpatch.com/wp-content/uploads/2021/01/GROGU-750x712.png" alt="Imagen de Grogu" />
                        </div>
                        <LoadingZone grogu={grogu} groguPosition={groguPosition} />
                        <div className={styles.merch_cupboard}>
                            <div className={styles.merch_item1}>
                                <span aria-label="emoji de galleta" title="emoji de galleta" className={styles.icon}>🍪</span> <span>x {3 - cookies}</span>
                            </div>
                            <div className={styles.merch_item2}>
                                <span aria-label="emoji de rana" title="emoji de rana" className={styles.icon}>🐸</span>  <span>x {3 - frogs}</span>
                            </div>
                            <div className={styles.merch_item3}>
                                <span aria-label="emoji de huevo" title="emoji de huevo" className={styles.icon}>🥚</span><span>x {3 - eggs}</span>
                            </div>
                        </div>
                    </section>
                    <Dice handleDiceValue={handleDiceValue} diceValue={diceValue} />
                </>

                :
                <section className={styles.section}>
                    <button onClick={handleButton} className={styles.button}>
                        Empezar nueva aventura
                    </button>
                </section>}

        </Main>
    )
}
export default Game;