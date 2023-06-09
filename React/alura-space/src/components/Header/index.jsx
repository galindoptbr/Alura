import logo from './logo.png'
import search from './search.png'
import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo Alura Space"/>
            <div>
                <input type="text" placeholder="What Do you search ?"/>
                <img src={search} alt="Icone da lupa"/>
            </div>
        </header>
    )
}