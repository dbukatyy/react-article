import React, {Component} from 'react';

export default (OriginalComponent) => class Accordion extends Component {
	
	state = {
		openArticleId: null
	}

	render() {
		return <OriginalComponent {...this.props} openArticleId = {this.state.openArticleId} toggleArticle = {this.toggleArticle}/>
	}

	toggleArticle = openArticleId => {
		if(this.state.openArticleId === openArticleId) {
			this.setState({
				openArticleId: null
			})
		} else {
			this.setState({openArticleId})
		}
	}
}