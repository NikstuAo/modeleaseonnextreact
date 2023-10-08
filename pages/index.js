import React, { useEffect, useState } from 'react';
import Head from '../components/Head.js';
import Logo from '../components/Logo.js';
import ModelEaseText from '../components/ModelEaseText.js';
import styles from '../styles/Home.module.css';

export default function Home() {

  const [logoClicks, setLogoClicks] = useState(0);
  const [lock, setLock] = useState(false);
  const unlock = () => {
    setLock(false);
  };

  const handleLogoClick = () => {
    if (logoClicks < 9) {
      setLogoClicks(logoClicks + 1);
    } else {
      const logoImg = document.getElementById("logoimg");
      logoImg.src = "./Dio.png";
      if (!lock) {
        var wryy = new Audio('./wryy.mp3');
        wryy.play();
        setLock(true);
        setTimeout(unlock, 3000);
      }
    }
  };

  return (
    <div>
      <div className={`container-fluid`}>
        <Head />
        <div className={`row`}>
          <ModelEaseText />
        </div>
        <div className={`row`}>
          <Logo onClick={handleLogoClick} />
        </div>
      </div>
    </div>
  )
}