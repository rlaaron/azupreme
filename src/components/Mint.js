import React from 'react';
import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import ABI from '../contract/ABI.json';
import '../styles/mint.css';

const CONTRACTAddress = "0x31E5853B63D2255473EF3B8cEA355a3E687D5Dc6";

const Mint = ({ accounts, setAccounts }) => {

  const [mintAmount, setMintAmount] = useState(0);
  const isConnected = Boolean(accounts[0]);
  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }


  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        CONTRACTAddress,
        ABI.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.033 * mintAmount).toString()),
        });
        console.log('response: ', response);
      } catch (err) {
        console.log("error: ", err)
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };
  const handleIncrement = () => {
    if (mintAmount >= 10) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <>
      {isConnected ? (
        <div className='container'>
          <div className='text'> 
            <p>A brand for the metaverse</p> 
            <p>3333 Azupreme</p>
          </div>
          <div className='mint'>
            <button onClick={handleDecrement} className="connect" >-</button>
            <p className='amount'>{mintAmount}</p>
            <button onClick={handleIncrement} className="connect" >+</button>
            <button onClick={handleMint} className="connect"> Mint now </button>
          </div>
          <div className='text'>
            <p>Not affiliated with azuki or supreme</p>
            <p>Zero royalties, we love Degens</p>
          </div>
        </div>
      ) : (
        <div className='container'>
          <button onClick={connectAccount} className='connect'>CONNECT TO MINT</button>
        </div>
      )}
    </>
  );
};

export default Mint;