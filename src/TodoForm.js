import React, { Component } from 'react';
import axios from 'axios';

class TodoForm extends Component {
	handleInputChange(e) {
	};

	focus() {
    this.nameInput.focus();
  };

  newMac() {
  	const URL = 'https://cfa-mac-secret-menu.herokuapp.com/macs/api?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRha2FoaXJvc3V6dWtpLm0wMTBAZ21haWwuY29tIiwiaWF0IjoxNDk1NTMxODk1fQ.9GY9toZd5oMUt-OdRyKOUBIxBT18p5-bGMsUconxDz4';
  	axios.post(URL + '&name=' + this.nameInput.value)
  		.then((response) => {
  			console.log(response);
  			this.nameInput.value = '';
  			this.props.getMacList();
  		})
  		.catch(function(error) {
  			console.log(error)
  		});
  };

	render() {
		return (
			<div>
				<input
					type="text"
					ref={(input) => { this.nameInput = input; }}
					onChange={(e) => this.handleInputChange(e)} />
				<button onClick={() => this.newMac()}>Yes you can</button>
			</div>
		)
	};
}

export default MacForm;
