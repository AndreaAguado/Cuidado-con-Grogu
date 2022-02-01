import Dice from "./game/Dice";
import Main from "./Main";

import styles from '../styles/game/Game.module.scss';

const Game = () => {
    const handleDiceValue = (diceValue) => {
        console.log(diceValue);
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
            <Dice handleDiceValue={handleDiceValue} />
        </Main>
    )
}
export default Game;