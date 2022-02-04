import styles from '../../styles/game/ModalWindow.module.scss';

import { useState } from 'react';

function ModalWindow(props) {
    const [hidden, setHidden] = useState(false);

    const handleCloseModal = () => {
        setHidden(true);
    }
    return (
        <div className={hidden ? styles.hidden : styles.modal}>
            <div className={styles.modal__dialog}>
                <div className={styles.modal__content}>
                    <header className={styles.header}>
                        <div onClick={handleCloseModal} className={styles.close_button}><i className='bx bx-x'></i></div>
                    </header>
                    <section>
                        {props.children}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;