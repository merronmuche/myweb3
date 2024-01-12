import React, { useState } from 'react';
import MyAlgoConnect from '@randlabs/myalgo-connect';

const WalletConnect = () => {
    const [account, setAccount] = useState(null);
    const myAlgoWallet = new MyAlgoConnect();

    const connectWallet = async () => {
        try {
            const accounts = await myAlgoWallet.connect();
            if (accounts.length > 0) {
                setAccount(accounts[0].address);
            } else {
                console.error("No accounts found.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {!account && (
                <button onClick={connectWallet}>Connect to MyAlgo Wallet</button>
            )}
            {account && <p>Connected Account: {account}</p>}
        </div>
    );
};

export default WalletConnect;
