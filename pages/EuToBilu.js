import Head from '../components/Head.js'
import styles from '../styles/Home.module.css'

export default function EuToBilu() {
  return (
    <div>
      <div className={`container-fluid`} id='container-fluid'>
        <Head />
        <div className={`row`}>
            <div className={`col`}>
                <video autoplay playsinline controls="controls" loop="loop" className={`object-fit-fill ${styles.eutobiluvideo}`} src="./Eutobilu.mp4"></video>
            </div>
        </div>
      </div>
    </div>
  )
}
