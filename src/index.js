import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';
import { colors } from './utils';

import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={{ colors }}>
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root'),
);
