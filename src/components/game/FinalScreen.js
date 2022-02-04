import ModalWindow from "./ModalWindow";

import styles from '../../styles/game/FinalScreen.module.scss';

const FinalScreen = (props) => {
    return (
        <ModalWindow>
            <article className={styles.article}>
                <img
                    className={styles.img}
                    src={props.gameStatus.won ? "https://as01.epimg.net/meristation/imagenes/2020/12/13/noticias/1607877632_138189_1607877695_noticia_normal.jpg" : "https://c.tenor.com/a2SxXtnWRswAAAAd/grogu-baby-yoda.gif"}
                    alt={props.gameStatus.won ? "Gif de Grogu comiendo galletas azules" : "Imagen de Grogu y Mando"} />
                <h3 className={styles.message}>{props.gameStatus.won ? "Mando completa la misión" : "¡Grogu se lo ha comido todo!"}</h3>
                <div>
                    <button onClick={props.reset}> Jugar de nuevo</button>
                </div>
            </article>
        </ModalWindow >
    )
}
export default FinalScreen;