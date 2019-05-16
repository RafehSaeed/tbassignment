import React from 'react';
import axios from 'axios';
import './App.css'

// Application component
export default class App extends React.Component {

	state = {
		result: []
	,	errorMsg: ''
	}

	setMedianResult = (result) =>{
		this.setState({result: result})
	}

	setErrorMsg = (msg) => {
		this.setState({errorMsg: msg})
	}

	render(){
		return(
			<div className="row App">
				<div className="twelve columns"><Form setMedianResult={this.setMedianResult} setErrorMsg={this.setErrorMsg}/></div>
				{ this.state.result.length >= 1 &&	<div className="twelve columns "><MedianList result={this.state.result}/></div>}
		  		{ this.state.errorMsg != '' && <div className="twelve columns"><ErrorMessage message={this.state.errorMsg}/></div>}
			</div>
		)
	}
}

//Form class component
class Form extends React.Component{

	state = {
		number: ''
	}

	handleSubmit = (event) => {

		event.preventDefault();

		axios.post('/calculate', {number: this.state.number}).then( res => {
				this.props.setMedianResult(res.data)
				this.props.setErrorMsg('')
			})
		    .catch( err => {
         		this.props.setErrorMsg(err.response.data[0].msg)
         		this.props.setMedianResult([])
       		})
		};

	render(){
		return(
		  	<form onSubmit={this.handleSubmit}>
		  			<input className="u-pull-left w-70" type="number" value={this.state.number} placeholder="Enter Value..." onChange={(event) => isNaN(event.target.value)?"":this.setState({number: event.target.value})}/>
		  			<button className="u-pull-right" type="submit">Get Median</button>
		  	</form>
		)
	}
}

//Functional component for displaying median numbers
const MedianList = (props) => {
	return(
  		<div>
  			<ul>
				{props.result.map( number =>
					<li key={number}>{number}</li>
				)}
  			</ul>
  		</div>
	)
}

//Functional component for displaying error messages
const ErrorMessage = (props) => {
	return(
  		<div>
  			<p className="error">{props.message}</p>
  		</div>
	)
}

export {
  Form,
  MedianList
}