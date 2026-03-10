import Service from "../service/Service"
import styles from "./Services.module.css"

function Services() {

    return (
        <section className={styles.service} id="services">
            <h2 className={styles.service__title}>Serviços Estéticos <img src="/img/service.png" alt="" /></h2>

            <div className={styles.service__container + " articles"}>

                <Service img="/services/massagem-relaxante.jpg" title="Massagem Relaxante" benefits={["Movimentos suaves, lentos e firmes", "Alívia tensões musculares e estresse", "Equilíbrio físico e mental"]} link="https://wa.me/+553798759161?text=Ol%C3%A1%2C%20quero%20marcar%20uma%20massagem"/>

                <Service img="/services/modeladora.jpg" title="Massagem Modeladora" benefits={["Movimentos intensos e rápidos", "Auxilia na redução de medidas", "Melhora o contorno corporal"]} link="https://wa.me/+553798759161?text=Ol%C3%A1%2C%20quero%20marcar%20uma%20massagem"/>

                <Service img="/services/drenagem-linfatica.jpg" title="Drenagem Linfática" benefits={["Estimula o sistema linfático", "Reduz inchaços e retenção de líquidos", "Melhora da oxigenação dos tecidos"]} link="https://wa.me/+553798759161?text=Ol%C3%A1%2C%20quero%20marcar%20uma%20drenagem"/>
                
                <Service img="/services/pos-operatorio.jpg" title="Massagem Pós-Operatório" benefits={["Auxilia na recuperação cirúrgica", "Reduz edemas e fibroses", "Técnica específica e personalizada"]} link="https://wa.me/+553798759161?text=Ol%C3%A1%2C%20quero%20marcar%20uma%20massagem"/>

                <Service img="/services/limpeza-de-pele.jpg" title="Limpeza de Pele" benefits={["Remove impurezas e células mortas", "Desobstrução dos poros", "Controle da oleosidade"]} link="https://wa.me/+553798759161?text=Ol%C3%A1%2C%20quero%20marcar%20uma%20limpeza"/>

                <Service img="/services/microagulhamento.jpg" title="Microagulhamento Facial" benefits={["Estimula a produção de colágeno", "Atenua linhas de expressão", "Melhora textura e firmeza da pele"]} link="https://wa.me/+553798759161?text=Ol%C3%A1%2C%20quero%20marcar%20uma%20microagulhamento"/>

                <Service img="/services/criolipolise.jpg" title="Protocolo Redutor Localizado" benefits={["Tecnologia para redução de gordura", "Tratamento não invasivo", "Melhora do contorno corporal"]} link="https://wa.me/+553798759161?text=Ol%C3%A1%2C%20quero%20marcar%20um%20massagem%20com%20protocolo%20redutor%20de%20gordura%20localizada"/>

            </div>
        </section>
    )
}

export default Services