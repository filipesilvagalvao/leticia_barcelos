import styles from "./Services.module.css"

function Services() {
    return (
        <section className={styles.service} id="treinos">
            <h2 className={styles.service__title}>Serviços</h2>

            <div className={styles.service__container}>
                <article className={styles.service__card}>
                    <div className={styles.service__description}>
                        <img src="/services/massagem-relaxante.jpg" alt="imagem de massagem relaxante" />
                        <h2 className={styles.service__cardTitle}>Massagem Relaxante</h2>
                        <ul className={styles.service__list}>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Movimentos suaves, lentos e firmes</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Alívia tensões musculares e estresse</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Equilíbrio físico e mental</li>
                        </ul>
                    </div>
                </article>

                <article className={styles.service__card}>
                    <div className={styles.service__description}>
                        
                        <h2 className={styles.service__cardTitle}>Massagem Modeladora</h2>
                        <ul className={styles.service__list}>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Movimentos intensos e rápidos</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Auxilia na redução de medidas</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Melhora o contorno corporal</li>
                        </ul>
                        <img src="/services/modeladora.jpg" alt="imagem de massagem modeladora" />
                    </div>
                </article>

                <article className={styles.service__card}>
                    <div className={styles.service__description}>
                        <img src="/services/drenagem-linfatica.jpg" alt="imagem de drenagem linfática" />
                        <h2 className={styles.service__cardTitle}>Drenagem Linfática</h2>
                        <ul className={styles.service__list}>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Estimula o sistema linfático</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Reduz inchaços e retenção de líquidos</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Melhora da oxigenação dos tecidos</li>
                        </ul>
                    </div>
                </article>

                <article className={styles.service__card}>
                    <div className={styles.service__description}>
                        
                        <h2 className={styles.service__cardTitle}>Massagem Pós-Operatório</h2>
                        <ul className={styles.service__list}>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Auxilia na recuperação cirúrgica</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Reduz edemas e fibroses</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Técnica específica e personalizada</li>
                        </ul>
                        <img src="/services/pos-operatorio.jpg" alt="imagem de massagem pos operatório" />
                    </div>
                </article>

                <article className={styles.service__card}>
                    <div className={styles.service__description}>
                        <img src="/services/limpeza-de-pele.jpg" alt="imagem de limpeza de pele" />
                        <h2 className={styles.service__cardTitle}>Limpeza de Pele</h2>
                        <ul className={styles.service__list}>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Remove impurezas e células mortas</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Desobstrução dos poros</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Controle da oleosidade</li>
                        </ul>
                    </div>
                </article>

                <article className={styles.service__card}>
                    <div className={styles.service__description}>
                        
                        <h2 className={styles.service__cardTitle}>Microagulhamento Facial</h2>
                        <ul className={styles.service__list}>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Estimula a produção de colágeno</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Atenua linhas de expressão</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Melhora textura e firmeza da pele</li>
                        </ul>
                        <img src="/services/microagulhamento.jpg" alt="imagem de microagulhamento" />
                    </div>
                </article>

                 <article className={styles.service__card}>
                    <div className={styles.service__description}>
                        <img src="/services/criolipolise.jpg" alt="imagem de criolipolise" />
                        <h2 className={styles.service__cardTitle}>Protocolo Redutor Localizado</h2>
                        <ul className={styles.service__list}>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Tecnologia para redução de gordura</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Tratamento não invasivo</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Melhora do contorno corporal</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Services