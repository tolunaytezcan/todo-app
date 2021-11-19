import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './style';

export const Text = ({ value, color, style }) => (
	<StyledText color={color} style={style}>
		{value}
	</StyledText>
);

Text.propTypes = {
	value: PropTypes.string.isRequired,
	color: PropTypes.oneOf(['primary', 'secondary', 'gray', 'white', 'black', 'red', 'green']),
	style: PropTypes.object,
};
