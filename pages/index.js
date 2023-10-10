import React, { useEffect, useState } from 'react';
import Head from '../components/Head.js';
import Logo from '../components/Logo.js';
import ModelEaseText from '../components/ModelEaseText.js';
import styles from '../styles/Home.module.css';
import logoClick from '../jscodes/logoclicks.js';
import GoogleLoginButton from '../components/GoogleLoginButton.js';

export default function Home() {
  const logoclicked = logoClick();
  const handleLogoClick = () => {
    logoclicked();
  }
  return (
    <div>
      <div className={`container-fluid`} id='container-fluid'>
        <Head />
        <div className={`row`}>
          <ModelEaseText />
        </div>
        <div className={`row`}>
          <Logo onClick={handleLogoClick} />
        </div>
        <div className={`row`}>
          <GoogleLoginButton className={`w-100 h-100`} />
        </div>
      </div>
    </div>
  )
}