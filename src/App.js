import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Logo from './Components/Logo.js';
import Imageform from './Components/Imageform.js';
import Imageframe from './Components/Imageframe.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: 'e790c006718f49ceaa9fd206ce68cf38'
});

const particesoption = {
	particles: {
		number: {
			value: 30,
			density: {
				enable: true,
				value_area: 800,
			}
		}
	}
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			input: '',
			ImageUrl: ''

		}
	}
	onInputChange = (event) => {
		this.setState({input: event.target.value});
	}
	onButtonSubmit = () => {
		 app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
	}
	render() {
	  return (
	    <div>
	      <Particles  className="particles"
	       params={particesoption}/>
	      <Navigation />
	      <Logo />
	      <Imageform 
	        onInputChange={this.onInputChange}
	        onButtonSubmit={this.onButtonSubmit}
	      />
	      <Imageframe ImageUrl={this.state.input}/>
	    </div>
	  );
    }
}

export default App;
