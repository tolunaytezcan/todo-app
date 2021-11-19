import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';

import App from './App';

import { colors } from './utils';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={{ colors }}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
