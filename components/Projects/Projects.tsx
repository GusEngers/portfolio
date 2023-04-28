import { Project, Card } from './Project';
import styles from './Projects.module.css';

const PJS : Card[] = [
  {
    image: "hola.com",
    name: "P1",
    description: "ASDASDA",
    techs: ["React, Node.js"],
    links: [{name: "En producción", url: "#"}, {name:"Github", url: "https://sadasd.com"}],
  },
  {
    image: "hola.com",
    name: "P2",
    description: "ASDASDA",
    techs: ["React, Node.js"],
    links: [{name: "En producción", url: "#"}, {name:"Github", url: "sadasd.com"}],
  }
]
export default function Projects(): JSX.Element {
  return (
    <div id='projects' className={styles.container}>
      <h1>Proyectos</h1>
      <div>
        {PJS.map((pro, index) => <Project image={pro.image} name={pro.name} description={pro.description} techs={pro.techs} links={pro.links} key={`${pro.name}-${index}`}/>)}
      </div>
    </div>
  );
}
