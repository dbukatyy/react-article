import React, {Component} from 'react';
import Article from './Article';
import accordionToggle from '../decorators/accordionToggle';


class ArticleList extends Component {
	
	render() {
		const {articles,openArticleId,toggleArticle} = this.props;
		const articleElements = articles.map(article => {
			return (
				<li key = {article.id}>
					<Article 
						toggleOpen = {toggleArticle} 
						isOpen = {openArticleId === article.id} 
						article = {article}
					/>
				</li>)})

		return (
			<ul>
				{articleElements}
			</ul>
		);
	};

}

export default accordionToggle(ArticleList);
