import styles from './About.module.css';
import Techs from './Techs';

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
              <p>
                <a
                  href='https://community.open-bootcamp.com/user/gusengers/certificaciones/49d13051-3e72-4927-8ae7-7f2b81dd481a'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Credencial
                </a>
              </p>
            </li>
            <li>
              <h4>Angular en OpenBootcamp</h4>
              <p>
                <a
                  href='https://community.open-bootcamp.com/user/gusengers/certificaciones/cffd0ba7-9e8e-4929-b2dc-81f4d8b2ac3a'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Credencial
                </a>
              </p>
            </li>
            <li>
              <h4>Typescript en OpenBootcamp</h4>
              <p>
                <a
                  href='https://community.open-bootcamp.com/user/gusengers/certificaciones/4d186bef-d375-4a42-8dfc-3bdce475606e'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Credencial
                </a>
              </p>
            </li>
            <li>
              <h4>Python en OpenBootcamp</h4>
              <p>
                <a
                  href='https://community.open-bootcamp.com/user/gusengers/certificaciones/cd565257-4a3f-4b55-acd8-f924dec8466a'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Credencial
                </a>
              </p>
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
              <p>Lectura y conversación</p>
            </li>
            <li>
              <h4>Inglés</h4>
              <p>Básico</p>
            </li>
          </ul>
        </div>
      </div>
      <h3>Tecnologías</h3>
      <Techs />
    </div>
  );
}
