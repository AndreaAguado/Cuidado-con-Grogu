import { Link } from 'react-router-dom';
import styles from '../styles/layout/Header.module.scss';
const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header_title}>Cuidado con Grogu!</h1>
            <nav className={styles.header_nav}>
                <ul className={styles.link_list}>
                    <li>
                        <Link to="/rules">Reglas del juego</Link>
                    </li>
                    <li>
                        <Link to="/pieces">Fichas</Link>
                    </li>
                    <li>
                        <Link to="/game">Juego</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;