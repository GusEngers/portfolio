import Image from 'next/image';
import styles from './Intro.module.css';
import image from '../../public/OIG.jpg';

export default function Intro(): JSX.Element {
  return (
    <div className={styles.container}>
      <p>
        Bienvenidos a mi <b>Portfolio</b>
      </p>
      <Image src={image} alt='Portada' />
    </div>
  );
}
