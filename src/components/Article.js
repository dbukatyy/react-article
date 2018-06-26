import React, {Component} from 'react';
import Comment from './Comment';

export default class Article extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {article, toggleOpen, isOpen} = this.props;

		return (
			<section>
				<h2>{article.title} ({article.date})</h2>
				{this.goText()}
				{isOpen ? <Comment comments = {article.comments} /> : null}
				<button onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'}</button>
			</section>
		)
	}

	goText = () => {
		const {article, isOpen} = this.props;

		return isOpen ? <p>{article.text}</p> : null
	};
}