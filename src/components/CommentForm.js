import React, {Component} from 'react';
import './input.css';

export default class CommentForm extends Component {

	state = {
		user: '',
		comment: ''
	}

	render() {
		return (
			<from>
				<input type="text" value = {this.state.user} onChange = {this.handleUserChange} />
				<textarea name="text" value = {this.state.comment} onChange = {this.handleCommentChange} ></textarea>
				<button>add comment</button>
			</from>
		)
	}

	handleUserChange = el => {
		if (el.target.value.length > 10) {
			el.target.style.outline = '1px solid red';
			return
		}

		this.setState({
			user: el.target.value
		})
	}

	handleCommentChange = el => {
		if (el.target.value.length > 100) {
			el.target.style.outline = '1px solid red';
			return
		}

		this.setState({
			comment: el.target.value
		})
	}
}