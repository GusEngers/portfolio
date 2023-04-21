import Link from 'next/link';
import styles from './Navbar.module.css';
import { useRouter } from 'next/router';

export default function Navbar(): JSX.Element {
  const { pathname } = useRouter();

  const defineStyle = (route: string): string => {
    if (pathname === route) return `${styles.item} ${styles.active}`;
    return `${styles.item}`;
  };
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li className={defineStyle('/')}>
          <Link style={{ textDecoration: 'None' }} href={'/'}>
            Inicio
          </Link>
        </li>
        <li className={defineStyle('/about')}>
          <Link style={{ textDecoration: 'None' }} href={'/about'}>
            Sobre Mí
          </Link>
        </li>
        <li className={defineStyle('/contact')}>
          <Link style={{ textDecoration: 'None' }} href={'/contact'}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
