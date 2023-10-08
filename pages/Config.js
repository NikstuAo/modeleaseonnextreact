import Head from '../components/Head.js'
import styles from '../styles/Home.module.css'

export default function Profile() {
  return (
    <div>
      <div className={`container-fluid`}>
        <Head />
        <div className={`row`}>
            <div className={`col`}>
                Configurações
            </div>
        </div>
      </div>
    </div>
  )
}
