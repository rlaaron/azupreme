import banner from '../img/banner.jpg'
import twitter from '../img/t2.png'
import OpenSea from '../img/opensea.png'
import Etherscan from '../img/etherscan.webp'
import '../styles/navbar.css';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand"><img src={banner} className="title_img"/></div>
                    <div className="d-flex">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" ><img src = {twitter} className = "links_img"/></a>
                                <a className="nav-link" href='https://opensea.io/collection/azupreme' target = '_blank' rel="noreferrer"><img src = {OpenSea} className = "links_img"/></a>
                                <a className="nav-link" href='https://etherscan.io/address/0x805B11d92Dcf960f14f5828E0c0F10772eE1E0D8' target = '_blank' rel="noreferrer"><img src = {Etherscan} className = "links_img"/></a>
                            </div>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;