import styles from './Button.module.css';
import {Button as MUIButton} from '@mui/material';

export default function Button({children}) {
    return (
        <MUIButton className={styles.btn}>
            {children}
        </MUIButton>
    )
}
