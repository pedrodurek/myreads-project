import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ShelfBooks from './ShelfBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {

	state = {
		loading: false,
		contentShelfBooks: [
			{
				id: 1,
				title: 'Currently Reading',
				shelf: 'currentlyReading'
			},{
				id: 2,
				title: 'Want to Read',
				shelf: 'wantToRead'
			},{
				id: 3,
				title: 'Read',
				shelf: 'read'
			}
		],
		books: []
	}

	componentDidMount() {

		this.setState({ loading: true })
		BooksAPI.getAll().then((books) => {
			this.setState({ books, loading: false })
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
		
		const { books, contentShelfBooks, loading } = this.state;
		return (
	  		<div className="app">
				<Route exact path="/" render={() => (
		  		    <ShelfBooks 
		  		    	books={books}
		  		    	contentShelfBooks={contentShelfBooks}
		  		    	loadingPage={loading}
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
