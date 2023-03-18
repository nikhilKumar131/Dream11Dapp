import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ScrollBar from '@/components/scrollBar'
import styles from '@/styles/History.module.css'


export default function Home() {
    return (
        <div className={styles.main}>
            <Navbar />
            
            <div className={styles.body}>
                {/* <img src='./banner.webp'/> */}
                <div className={styles.content}>
                    This Page will show all the players and stats of a particual match from past
                </div>
            </div>
        </div>
    )
}