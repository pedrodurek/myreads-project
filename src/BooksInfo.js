import React from 'react'
import PropTypes from 'prop-types'

const BooksInfo = ({ book }) => {

	return (
		<div>
			<div className="book-title">{book.title}</div>
		  	<div className="book-authors">{book.authors}</div>
		</div>
	)
	
}

BooksInfo.propTypes = {
	book: PropTypes.object.isRequired,
}

export default BooksInfo