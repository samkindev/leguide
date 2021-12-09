import styles from './MainMenu.module.css';
import {IconButton, Typography} from '@mui/material';
import {CreditCard, ShoppingBasket, Hexagon, Save, RssFeed, Campaign} from '@mui/icons-material';
import { Box } from '@mui/system';

export default function MainMenu () {
    return (
        <div className={styles.mainmenu}>
            <div className={styles.maintools}>
                <IconButton className={styles.btn}>
                    <Campaign className={styles.icon} />
                    <span className={styles.text}>Offre</span>
                </IconButton>
                <IconButton className={styles.btn}>
                    <Hexagon className={styles.icon} />
                    <span className={styles.text}>Demmandes</span>
                </IconButton>
                <IconButton className={styles.btn}>
                    <ShoppingBasket className={styles.icon} />
                    <span className={styles.text}>Boutiques</span>
                </IconButton>
                <IconButton className={styles.btn}>
                    <CreditCard className={styles.icon} />
                    <span className={styles.text}>Coop</span>
                </IconButton>
                <IconButton className={styles.btn}>
                    <Save className={styles.icon} />
                    <span className={styles.text}>Entreprise</span>
                </IconButton>
                <IconButton className={styles.btn}>
                    <RssFeed className={styles.icon} />
                    <span className={styles.text}>Fournisseurs</span>
                </IconButton>
            </div>
        </div>
    )
}