import React, { Component } from 'react';
import Notifications, {notify} from 'react-notify-toast';
import { Link } from 'react-router-dom'
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
		BooksAPI.search(query).then((books) => {
			
			if (books) {
				
				books.forEach((book) => book.shelf = 'nil')
				this.setState({ books })

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
		                {/* NOTES: The search from BooksAPI is limited to a particular set of search terms. You can find these search terms here: https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if you don't find a specific author or title. Every search is limited by search terms.ya */}
		                <input 
		                	type="text" 
		                	placeholder="Search by title or author" 
		                	onChange={(e) => this.searchBook(e.target.value)}
		                />

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