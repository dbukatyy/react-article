import React, {Component} from 'react';
import CommentForm from './CommentForm';

export default class Comment extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: true
		}
	}

	render() {
		const {comments = []} = this.props;
		const commentList = comments.map(comment => {
			return (
				<li key = {comment.id}>
					<p>{comment.text}</p>
					<p><small>{comment.user}</small></p>
				</li>
			)
		});

		return (
			<div>
				<ul>
					{this.state.isOpen ? commentList : null}
				</ul>
				<button onClick = {this.toggleComments}>
					{this.state.isOpen ? 'hide' : 'show'} comments
				</button>
				<CommentForm />
			</div>
		)
	}

	toggleComments = () => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}))
	};
}