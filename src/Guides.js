import React from 'react';
import './Guides.css';
import GuideComp from './GuideComp';

function Guides() {
  return (
    
    <div className='main'>

      <p className='head'>Potential Guides</p>

      <div className='sub'>

        <div className='one'>
          <GuideComp />

        </div><div className='one'>
          <GuideComp />
        </div>

      </div>
      <div className='sub'>

        <div className='one'>
          <GuideComp />
        </div>

        <div className='one'>
          <GuideComp />
        </div>

      </div>

      <div className='sub'>

        <div className='one'>
          <GuideComp />
        </div>

        <div className='one'>
          <GuideComp />
        </div>

      </div>
    </div>
  )
}

export default Guides;
