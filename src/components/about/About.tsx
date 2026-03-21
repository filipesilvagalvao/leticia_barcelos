import styles from "./About.module.css"

function About() {
  return (
    <section className={styles.about} id="about">
        <div className={styles.about__container}>
            <img src="/photo/foto-3.jpeg" alt="foto de letícia" className={styles.about__photo}/>
            <div className={styles.about__content}>
                <h2 className={styles.about__title}>Letícia Barcelos</h2>
                <p>Olá, me chamo Letícia Barcelos e atuo há mais de 6 anos na área da estética, ajudando mulheres a elevarem sua autoestima e bem-estar por meio de tratamentos personalizados e eficazes. Atualmente, estou em formação em Biomedicina, o que fortalece ainda mais meu conhecimento técnico e científico.</p>

                <p>Busco constante evolução, participando de congressos e cursos para me manter atualizada com as mais modernas técnicas do mercado. Sou especializada em drenagem linfática, massagem modeladora, relaxante, bambuterapia e liberação miofascial, sempre priorizando um atendimento humanizado, seguro e com resultados reais.</p>
                <a href="https://wa.me/+553798759161?text=Ol%C3%A1%20Let%C3%ADcia%2C%20quer%20agendar%20uma%20consulta" target="_blank">Agendar Consulta</a>
            </div>
        </div>
    </section>
  )
}

export default About