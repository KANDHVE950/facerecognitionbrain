import React from 'react';


const Imageframe = ({ImageUrl}) => {
	return ( 
		<div className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns"> 
		  <img src={ImageUrl} alt="Face" />
			
	    </div>		 
	);
}
export default Imageframe;

