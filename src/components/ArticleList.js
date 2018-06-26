import React, {Component} from 'react';
import Article from './Article';
import {connect} from 'react-redux';
import {dateFilter} from '../AC';
import DayPicker, { DateUtils } from 'react-day-picker';
import accordionToggle from '../decorators/accordionToggle';
import 'react-day-picker/lib/style.css';


class ArticleList extends Component {
	
	render() {
		const {articles,openArticleId,toggleArticle, filter} = this.props;
		const { from, to } = filter;
    	const modifiers = { start: from, end: to };
    	
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
    	const range = DateUtils.addDayToRange(day, this.props.filter);
    	this.props.dateFilter(range);
  	}

}

export default connect(state => {
	return {
		articles: state.articles,
		filter: state.filter
	}
}, {dateFilter})(accordionToggle(ArticleList));
