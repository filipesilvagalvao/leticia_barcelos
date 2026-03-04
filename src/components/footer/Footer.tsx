import styles from "./Footer.module.css"

function Footer() {
    
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>

                <div className={styles.footer__logo}>
                    <img src="/logo/logo-2.png" alt="logo" />
                </div>

                <div className={styles.footer__adress}>
                    <p>Rua Exemplo, 100, Pompéu - MG</p>
                    <p>E-mail: contato@gmail.com.br</p>
                    <p>Telefone: 37 9999-9999</p>
                </div>

                <div className={styles.footer__social}>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>

            <div className={styles.footer__copyright}>
                <p>&copy; 2026 Letícia Barcelos, Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer