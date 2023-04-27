import styles from './About.module.css';

export default function About() {
  return (
    <div id='about' className={styles.container}>
      <h1>Sobre Mí</h1>
      <div>
        <div>
          <h3>Experiencia</h3>
          <ul>
            <li>
              <h4>Proyecto Individual Full-Stack en Henry</h4>
              <p>Sep. 2022 - Oct. 2022</p>
            </li>
            <li>
              <h4>Proyecto Grupal Full-Stack en Henry</h4>
              <p>Oct. 2022 - Nov. 2022</p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Formación</h3>
          <ul>
            <li>
              <h4>Full-Stack Web Developer en Henry</h4>
              <p>Jul. 2022 - Nov. 2022</p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Certificaciones</h3>
          <ul>
            <li>
              <h4>Javascript en OpenBootcamp</h4>
              <p>Jul. 2022 - Nov. 2022</p>
            </li>
            <li>
              <h4>Angular en OpenBootcamp</h4>
              <p>Jul. 2022 - Nov. 2022</p>
            </li>
            <li>
              <h4>Typescript en OpenBootcamp</h4>
              <p>Jul. 2022 - Nov. 2022</p>
            </li>
            <li>
              <h4>Python - Básico en OpenBootcamp</h4>
              <p>Jul. 2022 - Nov. 2022</p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Idiomas</h3>
          <ul>
            <li>
              <h4>Español</h4>
              <p>Nativo</p>
            </li>
            <li>
              <h4>Portugués</h4>
              <p>Lectura</p>
            </li>
            <li>
              <h4>Inglés</h4>
              <p>Básico A1</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
