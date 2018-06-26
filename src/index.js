import React from 'react'
import {render} from 'react-dom'
import ArticleList from './components/ArticleList'
import {Provider} from 'react-redux'
import store from './store'

render(<Provider store = {store}><ArticleList /></Provider>, document.getElementById('container'))