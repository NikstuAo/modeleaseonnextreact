import Head from '../components/Head.js'
import styles from '../styles/Home.module.css'

export default function Store() {
  return (
    <div>
      <div className={`container-fluid`} id='container-fluid'>
        <Head />
        <div className={`row`} style={{ marginTop: '10px' }}>
          <div className={`col ${styles.circular_border}`} style={{ backgroundColor: '#B6E1E7', color: 'white', marginLeft: '50px', marginRight: '50px' }} id="storewrapper">
            <div className={`col ${styles.circular_border}`} style={{ backgroundColor: '#B6E1E7', color: 'white', margin: '50px' }} id="storemenuwrapper">
              <div className={`row`}>
                <div className={`col-lg-4 text-center`}>
                  <div className={`row`}>
                    <div className={`col storeitemdad ${styles.storeitemdad}`} style={{ backgroundColor: '#B6E1E7' }}>
                      <div className={`col ${styles.storeitem} storeitem`} style={{ backgroundColor: '#FAE7A5' }}>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-lg-4 text-center`}>
                  <div className={`row`}>
                    <div className={`col storeitemdad ${styles.storeitemdad}`} style={{ backgroundColor: '#B6E1E7' }}>
                      <div className={`col ${styles.storeitem} storeitem`} style={{ backgroundColor: '#FAE7A5' }}>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-lg-4 text-center`}>
                  <div className={`row`}>
                    <div className={`col storeitemdad ${styles.storeitemdad}`} style={{ backgroundColor: '#B6E1E7' }}>
                      <div className={`col ${styles.storeitem} storeitem`} style={{ backgroundColor: '#FAE7A5' }}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
