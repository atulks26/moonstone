import React from 'react'
import "./Home.css";
import Banner from './Banner';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className='home'>
      <div className='home_container'>
        <div className='home_image'>
          <Banner />

          
          
         <div className='lul'>

          
            <div className='buttons'>
              
                <button>
                  <Link to="/register">
                    Tourist
                  </Link>
                </button>

                <button>
                  <Link to="/regform">
                    Guide
                  </Link>
                </button>
              
            </div>
  

          <div className='info'>
          A platform connecting tourists with knowledgeable and passionate local guides who want to share their unique insights and perspectives with visitors from aroound the world.
          </div>


          <div>
            <p className='aim'>
              Our Aim
            </p>
            <p className='aim2'>
            By bridging the gap between tourists and locals, we aim to create authentic and memorable travel experiences for everyone involved. Whether you're looking to explore a new city or share your love for your hometown, our platform provides a simple and efficient way to connect with like-minded individuals and build meaningful connections through travel.
            </p>
        </div>
<p id="bottom">
        <div className='helpline'>
          <div className='left'>
            <p>Police: 100</p>
            <p>Fire: 101</p>
            <p>Ambulance: 102</p>
            <p>Women Helpline: 1091</p>
          </div>
          <div className='right'>
            <p>Railway Enquiry: 139</p>
            <p>Tourist Helpline: 1800111363</p>
            <p>LPG Leak Helpline: 1906</p>
            <p>Cyber Crime Helpline: 155620</p>
          </div>
        </div> 
        </p>  
      </div>
      
    </div>
    </div>
    </div>
  )

}

export default Home;