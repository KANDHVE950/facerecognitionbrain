import React from 'react';
import './Imageform.css'


const Imageform = ({onInputChange, onButtonSubmit}) => {
	return (  
		<div className="center mh5" >
          <p className="f5 mh5" style={{alignitems: 'center'}}>This Magic Brain will detect faces in your pictures. Give it a try </p>
          <div className="form pa4 br3 dl shadow-5 ">
          	<input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}></input>
            <button className="f4 w-30 grow ph3 pv2 dim  white bg-near-black" href="#0" onClick={onButtonSubmit}>Detect</button>
          </div>
        </div>
	);
}
export default Imageform;

