import React from 'react'
import "./GuideComp.css"

function GuideComp() {
  return (
    <div className='guide'>
      <div className='image'>
        <img className='pfp' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
      </div>
      
      <div className='info'>
        <p className='guide_name'>Amazing Name</p>
        <p className='guide_no'>+91 XXXXXXXX89</p>
        <p>⭐⭐⭐⭐⭐</p>
      </div>

    </div>
  )
}

export default GuideComp
