import React, {Component} from 'react';
import Comment from './Comment';

export default class Article extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: true
		}
	}

	render() {
		const {article} = this.props;

		return (
			<section>
				<h2>{article.title} ({article.date})</h2>
				{this.goText()}
				<Comment comments = {article.comments} />
				<button onClick = {this.textToggle}>{this.state.isOpen ? 'hide' : 'show'}</button>
			</section>
		)
	}

	textToggle = () => {
		this.setState((prevState) => ({
			isOpen: !prevState.isOpen
		}));
	};

	goText = () => {
		const {article} = this.props;

		return this.state.isOpen ? <p>{article.text}</p> : null
	};
}