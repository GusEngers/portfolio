import styles from './Project.module.css';

type Links = {
  url: string;
  name: string;
};

export type Card = {
  image: string;
  name: string;
  description: string;
  techs: string[];
  links: Links[];
};

export function Project(project: Card) {
  return (
    <div className={styles.container}>
      <img src={project.image} alt={project.name} />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <h4>Algunas techs usadas</h4>
      <div>
        {project.techs.map((tech) => (
          <span>{tech}</span>
        ))}
      </div>
      {project.links.map((link) =>
        link.name.includes('En producción') ? (
          <span>{link.name}</span>
        ) : (
          <a href={link.url} target='_blank' rel='noopener noreferrer'>
            {link.name}
          </a>
        )
      )}
    </div>
  );
}
