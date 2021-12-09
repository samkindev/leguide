import styles from './Appbar.module.css';
import Logo from '../Logo';
import MenuIcon from '@mui/icons-material/Menu';
import BuildIcon from '@mui/icons-material/Build';
import {IconButton, Button} from '@mui/material';

export default function AppBar() {
    return (
        <nav className={styles.appbar}>
            <div className={styles.toolbar}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <menu>
                    <Button variant="outlined" className={styles.btn}>Rejoindre la chambre</Button>
                </menu>
                <IconButton>
                    <MenuIcon fontSize="large" />
                </IconButton>
            </div>
        </nav>
    )
}
