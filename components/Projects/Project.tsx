import styles from './Project.module.css';
import { Card } from './data';

export default function Project(project: Card): JSX.Element {
  return (
    <div className={styles.container}>
      <img
        src={project.image}
        alt={project.name}
        height={'200px'}
        width={'350px'}
      />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <h4>Algunas techs usadas</h4>
      <div>
        {project.techs.map((tech, index) => (
          <span key={`${tech}-${index}`}>{tech}</span>
        ))}
      </div>
      {project.links.map((link) =>
        link.name.includes('en desarrollo') ? (
          <span className={styles.msg}>{link.name}</span>
        ) : (
          <a href={link.url} target='_blank' rel='noopener noreferrer'>
            {link.name}
          </a>
        )
      )}
    </div>
  );
}
