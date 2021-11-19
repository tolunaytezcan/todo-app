import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './style';

export const Text = ({ value, color }) => <StyledText color={color}>{value}</StyledText>;

Text.propTypes = {
	value: PropTypes.string.isRequired,
	color: PropTypes.oneOf(['primary', 'secondary', 'gray', 'white', 'black', 'red']),
};
