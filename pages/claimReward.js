import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ScrollBar from '@/components/scrollBar'
import styles from '@/styles/History.module.css'
import { ethers } from 'ethers'
import web3Modal from 'web3modal'
import { useRef, useEffect, useState } from 'react'
import { address, abi } from '@/contract/contract'


export default function Home() {

    function claim() {
        console.log("claim")
        claimReward()

    }

    // web3 functions
    async function claimReward() {
        try {
            const signer = await getProviderOrSigner(true);
            console.log("claim2")
            const contract = new ethers.Contract(address, abi, signer);
            const txn = await contract.claimReward();
            console.log("claim3")
            await setT.wait();
            console.log("Transaction has been completed");
        }

        catch {
            (err) => {
                console.log(err.code)
            }
        }
    }

    const web3ModalRef = useRef();

    async function getProviderOrSigner(signer = false) {
        try {
            const provider = await web3ModalRef.current.connect()
            const providers = new ethers.providers.Web3Provider(provider)

            if (signer) {
                const signer = providers.getSigner();
                return signer;
            }

            return providers;
        }
        catch {
            (err) => { console.error(err) }
        }

    }

    useEffect(() => {
        web3ModalRef.current = new web3Modal({
            network: "goerli",
            providerOptions: {},
            disableInjectedProvider: false,
        });
    }, [])

    async function checkScore() {
        try {
            const signer = await getProviderOrSigner(true);
            console.log("claim2")
            const contract = new ethers.Contract(address, abi, signer);
            const addr = signer.getAddress();
            const txn = await contract.getYourPoints(addr);
            const scr = parseInt(txn)
            console.log(scr)
            setScore(scr)
        }

        catch {
            (err) => {
                console.log(err.code)
            }
        }
    }

    const [score, setScore] = useState()


    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.body}>

                <div className={styles.content}>
                    <ul>
                        <h1>Press This button to claim reward:</h1>
                        <h2>Rules:</h2>
                        <li>Reward can be collected after the match is complete</li>
                        <li>Check weather you win the reward or not by checking your points</li>
                        <li>If you are not eligable you can't collect reward</li>
                    </ul>
                    <br />
                    <div className={styles.body}>
                        <button className={styles.claimRewardButtons} onClick={claim}>Claim Reward</button>
                        <button className={styles.claimRewardButtons} onClick={checkScore}>Check Score</button>
                    </div>
                    <br />
                    <p>The Current Score is: {score}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}