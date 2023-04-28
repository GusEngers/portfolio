import styles from './Contact.module.css';

export default function Contact(): JSX.Element {
  return (
    <div id='contact' className={styles.container}>
      <h1>Contacto</h1>
      <div>
        <p>
          Para más información y conocer mis servicios puedes contactarme en los
          siguientes enlaces
        </p>
        <div>
          <a
            href='https://www.linkedin.com/in/gustavo-elias-engers-965788223/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visítame en LinkedIn
          </a>
          <a
            href='https://github.com/GusEngers'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visítame en GitHub
          </a>
          <a href='mailto:gustavoengers6441@gmail.com'>Envíame un Correo</a>
          <a href='/CV_GusEngers.pdf' target='_blank' rel='noopener noreferrer'>
            Ver CV
          </a>
        </div>
      </div>
    </div>
  );
}
