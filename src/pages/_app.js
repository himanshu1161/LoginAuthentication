import { Provider } from 'react-redux';
import store from '../store';
import '../styles/globals.css';
import Toast from '../component/Toast';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Toast />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
