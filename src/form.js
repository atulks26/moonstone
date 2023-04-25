import React, { useState } from 'react';
import './App.css';

function Form() {
	return (
		<div className="Form">
			<form>
        <h1>Guide Certification Form</h1>

        <input type="text" placeholder="Name"/>

        <input type="number" placeholder='DD.MM.YY'/>

				<input type="email" placeholder='Email'/>

				<input type="text" placeholder='Address'/>

				<p>Adhaar Card</p>
				<input type="file" placeholder='Adhaar Card'/>

				<p>Your Photo</p>
				<input type="file" placeholder='Your Photo'/>

        <button className='register_button'>Sign Up</button>
      </form>
		</div>
	);
}

export default Form; 