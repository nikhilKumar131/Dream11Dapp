import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ScrollBar from '@/components/scrollBar'
import styles from '@/styles/History.module.css'
import { address, abi } from "@/contract/contract.js"


export default function Home() {

  console.log(address)
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.content}>
          <h1>
            YOUR OWN CRYPTO CRICKET BETTING GAME
          </h1>
          <h2>Bet some ETH to earn big rewards, working on GOERLI TESTNET only.</h2>
          <br />
          <h1>
            MI VS CSK
          </h1>
          <div className={styles.body}>
            <div style={{ display: "flex", flexDirection: "row", float: "center"}}>
              <img src='./mi.png' />
              <img style={{ marginLeft: "100px" }} src='./csk.png' />
            </div></div>

          <br />
          <div>
            <p>Time: <strong>20:00</strong></p>
            <p>Date: <strong>26/05/2023</strong></p>
            <p>Player Selection Starting Time: <strong>00:00 </strong></p>
            <p>Player Selection Ending Time: <strong>20:00</strong></p>
            <p>gambling amount: <strong>0.001 eth</strong></p>
            <p>Reward: <strong>0.002 eth</strong></p>
            <a>A game with with almost 50% chances to <strong>DOUBLE YOUR MONEY</strong></a>
            <br />
            <p>Go and Select your <a style={{color: "blueviolet"}} href='./teamSelection'><strong>DREAM TEAM</strong></a>, and claim big REWARDS</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}