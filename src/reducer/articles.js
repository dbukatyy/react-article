import {articles} from '../fixtures';

export default (articleState = articles, action) => {
	const {type, payload} = action;

	switch(type) {
		case 'CHANGE_DATE':
			return articles.filter(article => {
				return Date.parse(article.date) > Date.parse(payload.date.from) && Date.parse(article.date) < Date.parse(payload.date.to)
			})
	}

	return articleState;
}