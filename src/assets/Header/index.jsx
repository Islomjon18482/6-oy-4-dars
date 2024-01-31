import React from 'react'
import styles from "./index.module.css"

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <h2>Darkor</h2>
        </div>
        <div className={styles.nav__bar}>
            <ul className={styles.ul}>
                <li className={styles.list}>Vakansiyalar</li>
                <li className={styles.list}>Kandidatlar</li>
                <li className={styles.list}>Kompaniyalar</li>
                <li className={styles.list}>Xizmatlar</li>
                <li className={styles.list}>Ta’lim</li>
            </ul>
        </div>
        <div className={styles.btn}>
            <button className={styles.translate}>O'zb</button>
            <button className={styles.start}>Boshlash</button>
        </div>
    </div>
  )
}
