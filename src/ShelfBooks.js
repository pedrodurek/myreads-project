import React from 'react'
import ListBooks from './ListBooks'
import Loading from './Loading'
import Header from './Header'
import SearchButton from './SearchButton'
import PropTypes from 'prop-types'

const ShelfBooks = ({ books, contentShelfBooks, loadingPage, onChangeShelf }) => {

	return (
		<div className="list-books">
			<Loading enabled={loadingPage} fullScreen={true} />
			<Header title={'MyReads'} />
			<div className="list-books-content">
				<div>
					{contentShelfBooks.map((content) => (
						<div key={content.id} className="bookshelf">
							<h2 className="bookshelf-title">{content.title}</h2>
							<div className="bookshelf-books">
								<ListBooks 
									books={books}
									shelf={content.shelf}
									onChangeShelf={onChangeShelf}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<SearchButton />
		</div>
	)

}

ListBooks.propTypes = {
	books: PropTypes.array.isRequired,
	contentShelfBooks: PropTypes.array,
	loadingPage: PropTypes.bool,
	onChangeShelf: PropTypes.func.isRequired
}

Loading.defaultProps = {
	contentShelfBooks: [],
  	loadingPage: false
}
export default ShelfBooks