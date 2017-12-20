import React from 'react'

const ListBooks = ({ books, bookStatus, shelf, onChangeShelf }) => {

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
				            		{bookStatus.map((status, index) => (
										<option 
											key={status.id} 
											value={status.shelf}
											disabled={index === 0}
										>{status.option}</option>
				            		))}
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

export default ListBooks