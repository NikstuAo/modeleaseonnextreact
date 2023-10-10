import styles from '../styles/Home.module.css'
import AnimatedSwitch from './AnimatedSwitch';
import AccountMenu from '../components/AccMenu.js';
import AccountMenuNotLogged from './AccMenuNotLogged';
import { useEffect, useState } from 'react';

export default function Head() {
  const [hasItem, setHasItem] = useState(false);
  useEffect(() => {
    var item_value_recuperado = sessionStorage.getItem("avatar_url");
    var item_value_recuperado2 = sessionStorage.getItem(item_value_recuperado);
    if (item_value_recuperado != null) {
      setHasItem(true)
    } else {
      setHasItem(false)
    }
  });
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
        {hasItem ? (
          <AccountMenu id="usericon" className={`bi bi-person-circle ${styles.userimg} ${styles.notransition}`} />
        ) : (
          <AccountMenuNotLogged id="usericon" className={`bi bi-person-circle ${styles.userimg} ${styles.notransition}`} />
        )}
      </div>
    </div>
  )
}

