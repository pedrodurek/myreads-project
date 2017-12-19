import React, { Component } from 'react'
// import If from './If'
import ListBooks from './ListBooks'
import { Link } from 'react-router-dom'

class ShelfBooks extends Component {
	
	state = {
		contentTitle: [
			{
				id: 1,
				title: 'Currently Reading'
			},{
				id: 2,
				title: 'Want to Read'
			},{
				id: 3,
				title: 'Read'
			}
		]
	}

	render() {
	
		const { contentTitle } = this.state
		const { books } = this.props
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
									<ListBooks books={books} title={content.title} />
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