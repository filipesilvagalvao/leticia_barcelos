import styles from "./Footer.module.css"

function Footer() {
    
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>

                <div className={styles.footer__logo}>
                    <img src="/logo/logo-6.png" alt="logo"/>
                </div>

                <div className={styles.footer__adress}>
                    <p> R. Aurora Torquato, 372 - Centro, Pompéu - MG</p>
                    <p>E-mail: leticiabarcelos811@gmail.com</p>
                    <p>Telefone: 37 99875-9161</p>
                </div>

                <div className={styles.footer__social}>
                    <a href="https://www.instagram.com/leticiabarcellos.estetica?igsh=MzJnMmZhYjdkZXQ2&utm_source=qr" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://wa.me/+553798759161?text=Ol%C3%A1%20Let%C3%ADcia%2C%20quer%20agendar%20uma%20consulta" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>

            <div className={styles.footer__copyright}>
                <p>&copy; 2026 Letícia Barcelos, Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer