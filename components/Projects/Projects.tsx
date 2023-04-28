import Project from './Project';
import styles from './Projects.module.css';
import { PJS } from './data';

export default function Projects(): JSX.Element {
  return (
    <div id='projects' className={styles.container}>
      <h1>Proyectos</h1>
      <div>
        {PJS.map((pro, index) => (
          <Project
            image={pro.image}
            name={pro.name}
            description={pro.description}
            techs={pro.techs}
            links={pro.links}
            key={`${pro.name}-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
