import Head from '../components/Head.js'
import styles from '../styles/Home.module.css'

export default function Profile() {
  return (
    <div>
      <div className={`container-fluid`} id='container-fluid'>
        <Head />
        <div className={`row`}>
            <div className={`col`}>
                My Account
            </div>
        </div>
      </div>
    </div>
  )
}
