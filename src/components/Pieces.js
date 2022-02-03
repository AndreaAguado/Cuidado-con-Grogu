import Main from "./Main";

import styles from '../styles/layout/pages.module.scss';

const Pieces = () => {
    return (
        <Main>
            <h2>Fichas</h2>
            <ul className={styles.list}>
                <li>Ficha de zona de carga (x6)</li>
                <li>Ficha de armario (x1)</li>
                <li>Ficha de recipiente (x3)</li>
                <li>Cajas de galletas (x3)</li>
                <li>Ranas (x3)</li>
                <li>Huevos de rana (x3)</li>
                <li>Dado (x1)</li>
                <li>Grogu (x1)</li>
            </ul>
        </Main>

    )
}
export default Pieces;