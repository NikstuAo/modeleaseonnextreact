import Head from '../components/Head.js'
import Logo from '../components/Logo.js'
import ModelEaseText from '../components/ModelEaseText.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  let logo_clicks = 0;

  const handleLogoClick = () => {
    if (logo_clicks < 10) {
      logo_clicks += 1;
    } else {
      const logoImg = document.getElementById("logoimg");
      logoImg.src = "./Dio.png";
    }
  };
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <ModelEaseText />
        </div>
        <div className='row'>
          <Logo onClick={handleLogoClick} />
        </div>
      </div>
    </div>
  )
}
