import styles from './Footer.module.css';
import {Typography} from '@mui/material';
import Link from '../Link';
import { Box } from '@mui/system';

export default function Footer () {
    return (
        <div className={styles.footer}>
             <div className={styles.content}>
                <ul className={styles.links}>
                    <li className={styles.listItem}>
                        <Link href={{pathname: "/"}}>FAQ</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href={{pathname: "/"}}>A propos</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href={{pathname: "/"}}>Compte</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href={{pathname: "/"}}>C.G.U.S</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href={{pathname: "/"}}>Confidentialité</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href={{pathname: "/"}}>Contacts</Link>
                    </li>
                </ul>
            </div>            
            <Box display="flex" alignItems="center" justifyContent="space-around" padding="10px">
                <Typography style={{fontSize: 13, color: '#ffffff7a'}}>+243 817654345</Typography>
                <Typography style={{fontSize: 13, color: '#ffffff7a'}}>leguide@gmail.com</Typography>
            </Box>
            <div className={styles.copyRight}>
                <Typography style={{ fontSize: 15 }}>© Leguide. tous droits reservés</Typography>
            </div>
        </div>
    )
}