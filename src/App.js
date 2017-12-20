import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ShelfBooks from './ShelfBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {

	state = {
		books: []
	}

	componentDidMount() {

		BooksAPI.getAll().then((books) => {
			console.log(books)
			this.setState({ books })
		})

	}

	changeShelf = (book, shelf) => {

		let { books } = this.state
		books = books.filter((b) => b.id !== book.id).concat({
			...book,
			shelf
		});
		BooksAPI.update(book, shelf).then((result) => {
			this.setState({ books });
		})

	}

  	render() {

		return (
	  		<div className="app">
				<Route exact path="/" render={() => (
		  		    <ShelfBooks 
		  		    	books={this.state.books}
		  		    	onChangeShelf={this.changeShelf}
		  		    />
				)}/>
				<Route path="/search" render={() => (
					<SearchBooks />
				)}/>
	  		</div>
		)
	}
}

export default BooksApp
