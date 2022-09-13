import { FaWhatsapp, FaTelegramPlane, FaLinkedinIn}  from 'react-icons/fa';

import styles from './styles.module.css'

function Footer() {
    return(
        <footer>
            <div className={styles.social_list}>
                <li>
                    <FaWhatsapp />
                </li>
                <li>
                    <FaTelegramPlane />
                </li>
                <li>
                    <FaLinkedinIn />
                </li>
            </div>
            <p className={styles.p}>Reserva de salas 2022</p>
        </footer>
    )
}

export default Footer