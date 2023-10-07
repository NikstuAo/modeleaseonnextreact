import Head from '../components/Head.js'
import Logo from '../components/Logo.js'
import ModelEaseText from '../components/ModelEaseText.js'
import Carousel from '../components/Carousel.js'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div>
      <div className={`container-fluid`}>
        <Head />
        <div className={`row`} style={{ marginTop: '10px' }}>
          <div className={`col ${styles.circular_border}`} style={{ backgroundColor : 'black', color : 'white', marginLeft: '50px', marginRight: '50px'}} id="aboutwrapper">
            <h1 className={`text-center fs-1 ${styles.notransition}`}  style={{ marginTop: '10px' }}>Quem Somos?</h1><br />
            <p className={`text-center fs-3 ${styles.notransition}`}  style={{ marginBottom: '20px' }}>Model ease é uma startup criada em 2023 pelos desenvolvedores Gustavo Schimidt Weber e Victor Renner. A startup foi criada com base nas ideias maker após o fundador Victor Renner se deparar com a falta de acesso a tecnologias de Impressão 3D e falta de acesso a modelos 3D de qualidade. <br /><br />
              Pensando nisso Victor cria a startup ModelEase e convida Gustavo Schimidt Weber para ser co-fundador. Em outubro de 2023 ModelEase ganha sua primeira versão como um site piloto para fornecimento de serviços de Impressão, Design, Modelagem e Compra de Modelos 3D. <br /><br />
              O site tinha diversos problemas e poucas features e foi feito de maneira bem humorada, apenas para demonstração da ideia. Após diversas versões, muitos estudos e ajustes ModelEase se torna oficialmente uma startup em 2024. Sempre mantendo em sua raiz a ideia de faça você mesmo e buscando fomentar a criatividade e as ideias originais.</p>
          </div>
        </div>
        <div className={`row ${styles.center_element} ${styles.margin_topbot}`}>
          <div className={`col-3 ${styles.whitebg}`}>

          </div>
          <div className={`col-6`}>
            <div className={`row`}>
              <p className={`fs-1 text-center ${styles.founders_text}`}>Fundadores</p>
            </div>
            <div className={`row`}>
              <Carousel />
            </div>
          </div>
          <div className={`col-3 ${styles.whitebg}`}>

          </div>
        </div>
      </div>
    </div>
  )
}
