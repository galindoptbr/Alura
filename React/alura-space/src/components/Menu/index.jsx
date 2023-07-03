import React from 'react'
import home from '../../assets/icons/home.png'
import maisCurtidas from '../../assets/icons/mais-curtidas.png'
import maisVistas from '../../assets/icons/mais-vistas.png'
import novas from '../../assets/icons/novas.png'
import surpreendaMe from '../../assets/icons/surpreenda-me.png'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt="" />
                <a href="">Home</a>
            </li>
            <li>
                <img src={maisCurtidas} alt="" />
                <a href="">More Likeds</a>
            </li>
            <li>
                <img src={maisVistas} alt="" />
                <a href="">More viwers</a>
            </li>
            <li>
                <img src={novas} alt="" />
                <a href="">News</a>
            </li>
            <li>
                <img src={surpreendaMe} alt="" />
                <a href="">Surprise me</a>
            </li>
        </ul>
    </nav>
  )
}
