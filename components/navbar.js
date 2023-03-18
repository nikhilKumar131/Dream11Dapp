import styles from '@/styles/History.module.css';
import web3Modal from "web3modal";
import { useState, useRef, useEffect } from "react";
import { ethers } from 'ethers';

function Navbar() {

    const web3ModalRef = useRef();
    const [walletStatus, setWalletStatus] = useState(false)

    async function metamask(signer = false) {
        try {
            const provider = await web3ModalRef.current.connect();
            const web3provider = new ethers.providers.Web3Provider(provider);

            // If user is not connected to the Goerli network, let them know and throw an error
            const { chainId } = await web3provider.getNetwork();
            if (chainId !== 5) {
                window.alert("Change the network to Goerli");
                throw new Error("Change network to Goerli");
            }
            if (signer) {
                const sign = web3provider.getSigner();
                return sign;
            }
            return web3provider;
        } catch { err => { console.error(err) } }
    }

    useEffect(() => {
        if (walletStatus == false) {
            web3ModalRef.current = new web3Modal({
                network: "goerli",
                providerOptions: {},
                disableInjectedProvider: false,
            });
            metamask()
            setWalletStatus(true)
        }
        try { balance() } catch { err => { console.error(err) } }

    }, [walletStatus])


    return (
        <div >

            <div className={styles.navbar}>
                <img className={styles.fimage} src='./logo.png' />
                <div >
                    <div className={styles.navBarButtons}>
                        <a href="/">Home</a>
                        <a href="/teamSelection">Team Selections</a>
                        <a href="/claimReward">Claim Reward</a>
                        <a href="/history">History</a>
                        <a href="about">About</a>
                    </div>

                </div>
                <div className={styles.metaMaskButton}>
                    <button className={styles.metaMask} onClick={metamask}>
                        <a>MetaMask</a>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Navbar;