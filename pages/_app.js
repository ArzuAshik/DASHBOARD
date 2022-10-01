import { Provider } from 'react-redux'
import AppLayout from '../Layout/AppLayout'
import { store } from '../redux/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  return <Provider store={store}>
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </Provider>
}

export default MyApp
