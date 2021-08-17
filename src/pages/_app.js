//this file is named _app.js, the leading underscore is important because without it next would create a page route in the application as /app
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;