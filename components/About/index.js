import Image from 'next/image';
import {Typography, Box} from '@mui/material';
import mission from '../../public/Mission.svg';
import vision from '../../public/vision.svg';
import valeur from '../../public/Valeur.svg';
import styles from './About.module.css'

export default function AboutComponent() {
    return (
        <div className={styles.container}>
            <div className={styles.mission}>
                <div className={styles.imageContainer}>
                    <Image
                        src={mission}
                        alt="mission"
                    />
                </div>
                <div className={styles.content}>
                    <Typography className={styles.contentTitle} variant="h3">La Mission</Typography>
                    <Typography className={styles.contentDetails}>
                        La chambre de commerce et d'industrie est un regroupement de communauté d'affaires congolaise qui permet de : développer son réseau d'influence, 
                        de s'informer en continu, 
                        de se positionner stratégiquement, 
                        de faire rayonner son entreprise et
                        d'appartenir à un écosystème influent.
                    </Typography>
                </div>
            </div>
            <div className={styles.vision}>
                <div className={styles.imageContainer}>
                    <Image
                        src={vision}
                        alt="vision"
                    />
                </div>
                <div className={styles.content}>
                    <Typography className={styles.contentTitle} variant="h3">La Vision</Typography>
                    <Typography className={styles.contentDetails}>
                        Rassembler, mobiliser et influencer l'ensemble de l'écosystème afin de contribuer qu développement du pays.
                    </Typography>
                </div>
            </div>
            <div className={styles.mission}>
                <div className={styles.imageContainer}>
                    <Image
                        src={valeur}
                        alt="valeur"
                    />
                </div>
                <div className={styles.content}>
                    <Typography className={styles.contentTitle} variant="h3">Les Valeurs</Typography>
                    <Typography>Etre à l'écoute de son milieu dans toute sa diversité, agir avec integrité et indépendance et être inclusif, collaboratif, créatif, accueillant, ouvert et engagé dans notre communauté ce sont nos valeurs.
                    </Typography>
                </div>
            </div>
        </div>
    )
}
