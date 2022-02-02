import styles from '../../styles/game/ModalWindow.module.scss';

function ModalWindow(props) {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__dialog}>
                <div className={styles.modal__content}>
                    <section>
                        {props.children}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;