import styles from '../styles/Home.module.css'

export default function Carousel() {
    return (
        <div className={`${styles.carousel_wrapper}`}>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="./Carousel-1.jpeg" className={`d-block w-100 ${styles.carousel_img} ${styles.circular_border}`} alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className={`${styles.carrousel_text}`}>Bruno</h5>
                                <p className={`${styles.carrousel_text}`}>Nós Não Falamos Sobre Bruno, Ele É Especial.</p>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./Carousel-2.jpeg" className={`d-block w-100 ${styles.carousel_img} ${styles.circular_border}`} alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className={`${styles.carrousel_text}`}>Gustavo</h5>
                                <p className={`${styles.carrousel_text}`}>Prodigio Do Time, Conseguiu 500 Pontos Na Carteira De Motorista De Primeira.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./Carousel-3.jpeg" className={`d-block w-100 ${styles.carousel_img} ${styles.circular_border}`} alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className={`${styles.carrousel_text}`}>Victor E Vinicius</h5>
                                <p className={`${styles.carrousel_text}`}>Fazem Parte Do Time.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./Carousel-4.png" className={`d-block w-100 ${styles.carousel_img} ${styles.circular_border}`} alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className={`${styles.carrousel_text}`}>Steven Jobs</h5>
                                <p className={`${styles.carrousel_text}`}>Foi Ressucitado Para Fazer A Arte Deste Website.</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}