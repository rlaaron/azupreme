import '../styles/content.css';
import gif from '../img/azupreme.gif'
import Mint from './Mint';
import { useState } from 'react';

const Content = () => {
    const [accounts, setAccounts] = useState([]);
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div className='container_gif'><img src={gif} alt="gif" className='gif'/></div>                        
                    </div>
                    <div class="col-md">
                        <Mint accounts={accounts} setAccounts={setAccounts}/>
                    </div>            
                </div>
            </div>
        </>
    );
}

export default Content;