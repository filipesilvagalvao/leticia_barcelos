import styles from "./About.module.css"

function About() {
  return (
    <section className={styles.about} id="about">
        <div className={styles.about__container}>
            <img src="/photo/foto-3.jpeg" alt="foto de letícia" className={styles.about__photo}/>
            <div className={styles.about__content}>
                <h2 className={styles.about__title}>Letícia Barcelos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias a accusamus ipsam architecto quaerat maiores reprehenderit? Aspernatur magnam rerum magni provident, eius perspiciatis est praesentium, quasi qui molestiae recusandae a?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis sequi voluptatibus at voluptatem placeat temporibus facilis tempore explicabo, totam animi ratione. Recusandae labore hic blanditiis dolor magni cumque perspiciatis saepe.</p>
                <a href="">Agendar Consulta</a>
            </div>
        </div>
    </section>
  )
}

export default About