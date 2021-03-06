import styles from '../../styles/game/Dice.module.scss';

const Dice = (props) => {

    const handleDice = () => {
        let diceRoll = rollTheDice(4, 1);
        props.handleDiceValue(diceRoll);
    }
    const rollTheDice = (max, min) => {
        return Math.round(Math.random() * (max - min) + min);
    }


    return (
        <section className={styles.dice_section}>
            {!props.hasFinished ?
                <>
                    <p key={Math.random()} className={styles.play_move}>{props.diceValue.playValue}</p>
                    <button className={styles.button} onClick={handleDice}>Lanzar el dado</button>
                </>
                : null
            }

        </section>
    )
}
export default Dice;