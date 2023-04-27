import styles from './Navbar.module.css'

export default function Navbar () : JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.container_one}>
        <span>Gustavo Engers</span>
      </div>
      <div className={styles.container_two}>
        <span><a href="#about">Sobre Mí</a></span>
        <span><a href="#projects">Proyectos</a></span>
        <span><a href="#contact">Contacto</a></span>
      </div>
    </div>
  )
}