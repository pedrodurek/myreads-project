import React, { Component } from 'react'
// import If from './If'
import ListBooks from './ListBooks'
import { Link } from 'react-router-dom'

class ShelfBooks extends Component {
	
	state = {
		contentTitle: [
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
		bookStatus: [
			{
				id: 1,
				option: 'Move to...',
				shelf: 'none'
			}, {
				id: 2,
				option: 'Currently Reading',
				shelf: 'currentlyReading'
			}, {
				id: 3,
				option: 'Want to Read',
				shelf: 'wantToRead'
			}, {
				id: 4,
				option: 'Read',
				shelf: 'read'
			}, {
				id: 5,
				option: 'None',
				shelf: 'none'
			}
		]
	}

	render() {
	
		const { contentTitle, bookStatus } = this.state
		const { books, onChangeShelf } = this.props
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						{contentTitle.map((content) => (
							<div key={content.id} className="bookshelf">
								<h2 className="bookshelf-title">{content.title}</h2>
								<div className="bookshelf-books">
									<ListBooks 
										books={books}
										bookStatus={bookStatus} 
										shelf={content.shelf}
										onChangeShelf={onChangeShelf}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		)
	}

}

export default ShelfBooks