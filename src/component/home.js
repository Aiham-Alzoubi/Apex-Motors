import '../style/home.css';
 function Home(){
    return(
        <div className="home">
            <img className='image1' src='https://cdn.mkrentacar.com/wp-content/uploads/2025/03/ferrari-scaled.jpg' alt=''></img>
            <div className='mune'>
                <h1 className='text'>Sports Car Rental in Dubai</h1>
                <ul className='items'>
                    <li className='item'>
                        <span className='icon'>No Deposit</span>
                        <span className='icon'>Fast Delivery</span>
                        <span className='icon'>Lowest Prices</span>
                        <span className='icon'>Largest Fleet</span>
                        <span className='icon'>24/7 Service</span>
                    </li>
                </ul>
            </div>
            <div>
                <img className='img2' src='https://cdn.mkrentacar.com/wp-content/uploads/2025/04/1-29-2048x1385-1.webp' alt='cars'></img>
            </div>
        </div>
    );
 }
 export default Home;