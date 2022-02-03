import { NavLink } from 'react-router-dom';
import styles from '../styles/layout/Header.module.scss';
const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header_title}>Cuidado con Grogu!</h1>
            <nav className={styles.header_nav}>
                <ul className={styles.link_list}>
                    <li>
                        <NavLink className={(navData) => { return (navData.isActive ? styles.active_link : styles.link) }} to="/rules">
                            Reglas del juego
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => { return (navData.isActive ? styles.active_link : styles.link) }} to="/pieces">Fichas</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => { return (navData.isActive ? styles.active_link : styles.link) }} to="/game">Juego</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;