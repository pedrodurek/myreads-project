import React, { Component } from 'react';
import Notifications, {notify} from 'react-notify-toast';
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle';
import ListBooks from './ListBooks'
import Loading from './Loading'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class SearchBooks extends Component {

	state = {
		loading: false,
		books: []
	}

	searchBook = (query) => {

		this.setState({ loading: true })
		BooksAPI.search(query).then((booksInSearch) => {
			
			if (booksInSearch instanceof Array) {
				
				const { booksOnShelf } = this.props
				/*  I don't know whether the following solution is the best for our needs or not, 
				but it was the only solution (using programming functional) I could think of. 
				I also would like to know, which solutions fit better for this case. Thanks! */

				/*  Filter the books in the shelf which are in the search returned */
				const booksInSearchOnShelf = booksOnShelf.filter((b) => booksInSearch.map((book) => book.id).includes(b.id))
				/* Filter the books in search returned which are on the shelf */
				booksInSearch = booksInSearch.filter((b) => !booksOnShelf.map((book) => book.id).includes(b.id))
				/* Concatenates both filters */
				const result = booksInSearch.concat(booksInSearchOnShelf)

				this.setState({ books: result })

			} else {
				this.setState({ books: [] })
			}
			this.setState({ loading: false })

		})

	}

	render() {

		const { books, loading } = this.state
		const { onChangeShelf } = this.props
		return (
			<div className="search-books">
				<Notifications />
		        <div className="search-books-bar">
		        	<Link className="close-search" to="/">Close</Link>
		            <div className="search-books-input-wrapper">
		            	<Debounce time="400" handler="onChange">
			                <input 
			                	type="text" 
			                	placeholder="Search by title or author" 
			                	onChange={(e) => this.searchBook(e.target.value)}
			                />
			            </Debounce>

		            </div>
		        </div>
		        <div className="search-books-results">
		        	<div className="parent-loading">
			        	<Loading enabled={loading} />
			            <ListBooks 
							books={books}
							onChangeShelf={(book, shelf) => {
								notify.show(`Livro "${book.title}" incluido com sucesso!`, 'success', 3000)
								onChangeShelf(book, shelf)
							}}
			            />
		        	</div>
		        </div>
			</div>
		)

	}

}

SearchBooks.propTypes = {
	onChangeShelf: PropTypes.func.isRequired
}

export default SearchBooks