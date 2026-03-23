import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <a href="/" className={styles.header__logo}>
                    <img src="/logo/logo-6.png" alt="logo leticia barcelos" />
                </a>

                <input type="checkbox" id="hamburguer" className={styles.header__checkbox}/>
                <label htmlFor="hamburguer" className={styles.header__hamburguer}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <nav className={styles.header__nav}>
                    <a href="/">Home</a>
                    <a href="#services">Serviços</a>
                    <a href="#about">Sobre mim</a>
                    <a href="#feedbacks">Feedbacks</a>
                    <a href="https://wa.me/+553798759161?text=Ol%C3%A1%20Let%C3%ADcia%2C%20quer%20agendar%20uma%20consulta" target="_blank">Agendar Consulta</a>
                    
                    <div className={styles.header__social}>
                        <a href="https://www.instagram.com/leticiabarcellos.estetica?igsh=MzJnMmZhYjdkZXQ2&utm_source=qr" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://wa.me/+553798759161?text=Ol%C3%A1%20Let%C3%ADcia%2C%20quer%20agendar%20uma%20consulta" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header