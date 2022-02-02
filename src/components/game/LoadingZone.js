import styles from '../../styles/game/LoadingZone.module.scss';

const LoadingZone = (props) => {

    const Box = (props) => {
        return (
            <div className={props.classname}></div>
        )
    }

    return (
        <>
            {
                Array.from(Array(6)).map((_, i) => (
                    props.grogu === i ? <Box key={i} classname={styles.current_box} /> : <Box key={i} classname={styles.regular_box} />
                ))
            }
        </>
    )
}
export default LoadingZone;