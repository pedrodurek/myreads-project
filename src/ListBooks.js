import React from 'react'
import PropTypes from 'prop-types'

const ListBooks = ({ books, shelf, onChangeShelf }) => {

	const currentBooks = books.filter((book) => book.shelf === shelf)
	return (
		<ol className="books-grid">
			{currentBooks.map((book) => (
				<li key={book.id}>
		        	<div className="book">
			            <div className="book-top">
			              	<div className="book-cover" style={{ 
				                width: 128, 
				                height: 193,
				                backgroundImage: `url(${book.imageLinks.smallThumbnail})`
				            }}/>
				            <div className="book-shelf-changer">
				            	<select onChange={(e) => onChangeShelf(book, e.target.value)} value={book.shelf}>
				            		<option value="nil" disabled>Move to...</option>
	                                <option value="currentlyReading">Currently Reading</option>
	                                <option value="wantToRead">Want to Read</option>
	                                <option value="read">Read</option>
	                                <option value="none">None</option>
								</select>
				            </div>
			            </div>
			            <div className="book-title">{book.title}</div>
  		                <div className="book-authors">{book.authors}</div>
		          	</div>
		        </li>
			))}
		</ol>
	)

}

ListBooks.propTypes = {
	books: PropTypes.array.isRequired,
	onChangeShelf: PropTypes.func.isRequired,
	shelf: PropTypes.string
}

ListBooks.defaultProps = {
  	shelf: 'nil'
}

export default ListBooks