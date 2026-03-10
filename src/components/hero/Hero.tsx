import styles from "./Hero.module.css"

function Hero() {
  return (
    <section className={styles.hero}>
        <div className={styles.hero__container}>
            <div className={styles.hero__cta}>
                <div className={styles.hero__ctaText}>
                    <p>Massoterapia & Bem-estar</p>
                    <h1>Cuide de você <br /><span>com quem entende</span></h1>
                    <a href="https://wa.me/+553798759161?text=Ol%C3%A1%20Let%C3%ADcia%2C%20quer%20agendar%20uma%20consulta" target="_blank">Agendar Consulta</a>
                </div>
                <div className={styles.hero__baloons}>
                    <img src="/img/img-2.png" alt="img" />
                    <img src="/img/img-3.png" alt="img" />
                    <img src="/img/img-4.png" alt="img" />
                </div>
            </div>
            <div className={styles.hero__img}>
                <img src="/img/img-5.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero