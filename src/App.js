import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

	state = {
		books: [
			{
				image: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
				title: 'To Kill a Mockingbird',
				authors: 'Harper Lee',
				status: 'Currently Reading'
			},
			{
				image: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
				title: "Ender's Game",
				authors: 'Orson Scott Card',
				status: 'Want to Read'
			}
		]
	}

  	render() {
		return (
	  		<div className="app">
				<Route exact path="/" render={() => (
		  		    <ListBooks />
				)}/>
				<Route path="/search" render={() => (
					<SearchBooks />
				)}/>
	  		</div>
		)
	}
}

export default BooksApp
