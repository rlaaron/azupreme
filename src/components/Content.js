import '../styles/content.css';
import gif from '../img/azupreme.gif'

const Content = () => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div className='container_gif'><img src={gif} alt="gif" className='gif'/></div>                        
                    </div>
                    <div class="col-md">
                        Column
                    </div>            
                </div>
            </div>
        </>
    );
}

export default Content;