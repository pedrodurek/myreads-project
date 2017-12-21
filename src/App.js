import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ShelfBooks from './ShelfBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {

	state = {
		loading: false,
		books: []
	}

	componentDidMount() {

		this.setState({ loading: true })
		BooksAPI.getAll().then((books) => {

			this.setState({ loading: false })
			this.setState({ books })

		})

	}

	changeShelf = (book, shelf) => {

		let { books } = this.state
		books = books.filter((b) => b.id !== book.id).concat({
			...book,
			shelf
		})
		this.setState({ loading: true })
		BooksAPI.update(book, shelf).then((result) => {
			this.setState({ books, loading: false });
		})

	}

  	render() {

		return (
	  		<div className="app">
				<Route exact path="/" render={() => (
		  		    <ShelfBooks 
		  		    	books={this.state.books}
		  		    	loadingPage={this.state.loading}
		  		    	onChangeShelf={this.changeShelf}
		  		    />
				)}/>
				<Route path="/search" render={() => (
					<SearchBooks onChangeShelf={this.changeShelf} />
				)}/>
	  		</div>
		)
	}
}

export default BooksApp
