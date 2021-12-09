import Image from 'next/image';
import styles from './Pub.module.css';
import pub from '../../public/pub.jpg';

export default function PubComponent() {
    return (
        <div className={styles.container}>
            <Image
                src={pub}
                alt="pub"
            />
        </div>
    )
}
