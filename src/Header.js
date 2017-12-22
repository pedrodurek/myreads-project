import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => {

	return (
		<div className="list-books-title">
			<h1>title</h1>
		</div>
	)
	
}

export default Header

Header.propTypes = {
	title: PropTypes.string.isRequired,
}