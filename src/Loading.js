import React from 'react'
import { PulseLoader } from 'react-spinners';
import PropTypes from 'prop-types'
import If from './If'

const Loading = ({ enabled, fullScreen }) => {
	
	return (
		<If test={enabled}>
			<div className="loading-component" style={{position: fullScreen?'fixed':'absolute'}}>
				<PulseLoader
					color={'#36d7b7'} 
					loading={enabled} 
					size={30}
		        />
			</div>
		</If>
	)

}

Loading.propTypes = {
	enabled: PropTypes.bool.isRequired,
	fullScreen: PropTypes.bool,
}

Loading.defaultProps = {
  	fullScreen: false
}

export default Loading