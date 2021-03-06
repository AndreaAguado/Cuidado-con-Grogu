import styles from '../styles/layout/Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <small className={styles.small}>Made with <span role="img" aria-label="emoji corazón" title="emoji corazón">&#10084;&#65039;</span> &copy; Andrea Aguado 2022</small>
            <nav>
                <ul className={styles.links_list}>
                    <li><a className={styles.link} href="https://twitter.com/andrea114am" target="_blank" rel="noreferrer" title="twitter.com/andrea114am"><i className='bx bxl-twitter' ></i></a></li>
                    <li><a className={styles.link} href="https://www.linkedin.com/in/andrea-aguado-moleon/" target="_blank" rel="noreferrer" title="linkedin.com/in/andrea-aguado-moleón/"><i className='bx bxl-linkedin'></i></a></li>
                    <li><a className={styles.link} href="https://github.com/AndreaAguado" target="_blank" rel="noreferrer" title="github.com/AndreaAguado"><i className='bx bxl-github' ></i></a></li>
                </ul>
            </nav>
        </footer>
    )
}
export default Footer;