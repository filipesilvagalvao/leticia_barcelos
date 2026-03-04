import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <a href="/" className={styles.header__logo}>
                    <img src="/logo/logo.png" alt="logo leticia barcelos" />
                </a>

                <input type="checkbox" id="hamburguer" className={styles.header__checkbox}/>
                <label htmlFor="hamburguer" className={styles.header__hamburguer}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <nav className={styles.header__nav}>
                    <a href="">Home</a>
                    <a href="">Serviços</a>
                    <a href="">Sobre</a>
                    <a href="">Feedbacks</a>
                    <a href="">Agendar Consulta</a>
                    
                    <div className={styles.header__social}>
                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                        <a href=""><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header