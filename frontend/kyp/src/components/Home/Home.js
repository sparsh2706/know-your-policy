import React from 'react';

class Home extends React.Component {
  // Constructor to initialize state and bind methods
	constructor(props) {
		super(props);
		this.handleFileUpload = this.handleFileUpload.bind(this);
	}

	// Method to handle file upload
	handleFileUpload(event) {
		const file = event.target.files[0];
		console.log(file); // For demonstration, we log the file object
		// Implement file upload to backend here
	}

	render() {
		return (
			<div>
				<header style={{padding: '20px', textAlign: 'center'}}>
					<h1>Know Your Policy</h1>
				</header>
				<div style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '80vh',
				}}>
					<div style={{
								border: '2px dashed #000',
								padding: '20px',
								width: '40%',
					}}>
						<input type="file" onChange={this.handleFileUpload} />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
