import styles from '../styles/Home.module.css'

export default function Logo({ onClick }) {
    return (
        <div className={`col-12 ${styles.center_element}`} id='logo'>
            <img className={`${styles.circular_border} ${styles.logo_img_wrapper}`} src='./logo.png' id='logoimg' draggable={false} onClick={onClick} />
        </div>
    )
}
