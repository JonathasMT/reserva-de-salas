import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function Navbar() {
    return(
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link to='/'>Home</Link>
            </li>
            <li className={styles.item}>
                <Link to='/minhasreservas'>Minhas reservas</Link>
            </li>
            <li className={styles.item}>
                <Link to='/configuracoes'>Configurações</Link>
            </li>
        </ul>
    )
}

export default Navbar