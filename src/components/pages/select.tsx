import styles from '../scss/selection.module.scss';
import people from '../attaches/people.png'
import ai from '../attaches/ai.png'


function Select() {

    const handleClickOne = () => {
        window.location.assign('/gameone');
    }

    const handleClickTwo = () => {
        window.location.assign('/gameai');
    }

    return(
        <div className={styles}>
            <div className={styles.page}>
                <div className={styles.menu}>
                    <div className={styles.select}>
                        <h1 className={styles.mr}>Играть с человеком</h1>
                        <img src={people} alt='people' className={styles.mr}></img>
                        <button className={styles.mrb} onClick={handleClickOne}>Играть</button>
                    </div>

                    <div className={styles.select}>
                        <h1 className={styles.mr}>Играть c ботом</h1>
                        <img src={ai} alt='people' className={styles.mr}></img>
                        <button className={styles.mrb} onClick={handleClickTwo}>Играть</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Select;