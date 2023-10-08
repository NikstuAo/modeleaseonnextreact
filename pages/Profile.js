import Head from '../components/Head.js'
import Logo from '../components/Logo.js'
import ModelEaseText from '../components/ModelEaseText.js'
import Carousel from '../components/Carousel.js'
import styles from '../styles/Home.module.css'

export default function Profile() {
  return (
    <div>
      <div className={`container-fluid`}>
        <Head />
        <div className={`row`}>
            <div className={`col`}>
                Perfil
            </div>
        </div>
      </div>
    </div>
  )
}
