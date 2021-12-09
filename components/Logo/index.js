import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Logo({width}) {
    return (
        <div style={{width: width ? width : 70}}>
            <Image
                src={logo}
                alt="le guide"
            />
        </div>
    )
}
