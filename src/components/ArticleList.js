import React, {Component} from 'react';
import Article from './Article';
import DayPicker, { DateUtils } from 'react-day-picker';
import accordionToggle from '../decorators/accordionToggle';
import 'react-day-picker/lib/style.css';


class ArticleList extends Component {

	state = {
		from: undefined,
      	to: undefined
	}
	
	render() {
		const { from, to } = this.state;
    	const modifiers = { start: from, end: to };
		const {articles,openArticleId,toggleArticle} = this.props;
		const articleElements = articles.map(article => {
			return (
				<li key = {article.id}>
					<Article 
						toggleOpen = {toggleArticle(article.id)} 
						isOpen = {openArticleId === article.id} 
						article = {article}
					/>
				</li>)})

		return (
			<div>
				<p>
		          {from && to && `Selected from ${from.toLocaleDateString()} to ${to.toLocaleDateString()}`}
		        </p>
				<DayPicker 
					selectedDays={[from, { from, to }]}
          			modifiers={modifiers}
          			onDayClick={this.handleDayClick}
				/>
				<ul>
					{articleElements}
				</ul>
			</div>
		);
	};

	handleDayClick = (day) => {
    	const range = DateUtils.addDayToRange(day, this.state);
    	this.setState(range);
  	}

}

export default accordionToggle(ArticleList);
