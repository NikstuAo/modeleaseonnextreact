import styles from '../styles/Home.module.css'
import AnimatedSwitch from './AnimatedSwitch';
import AccountMenu from '../components/AccMenu.js';

export default function Head() {
  return (
    <div className={`${styles.stickymenu} ${styles.circular_border} navbar`} id="headmenu" style={{ marginTop: '2px' }}>
      <div className={`nav-item`} style={{ marginLeft: '10px' }}>
        <AnimatedSwitch />
      </div>
      <a className={`nav-item nav-link active ${styles.linktoanotherpage}`} href="./">Inicio</a>
      <a className={`nav-item nav-link ${styles.linktoanotherpage}`} href="./Store">Loja</a>
      <a className={`nav-item nav-link ${styles.linktoanotherpage}`} href="./About">Sobre</a>
      <a className={`nav-item nav-link ${styles.linktoanotherpage}`} href="./SendModel">Enviar Modelo</a>
      <div className={`nav-item`} style={{ marginRight: '10px' }}>
        <AccountMenu id="usericon" className={`bi bi-person-circle ${styles.userimg} ${styles.notransition}`} />
{/*   <div id="usercircle" className={`${styles.user_circle} ${styles.notransition}`}>
       <svg id="usericon" className={`bi bi-person-circle ${styles.userimg} ${styles.notransition}`} xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
        </div>
*/}
      </div>
    </div>
  )
}

