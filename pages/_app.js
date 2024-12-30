import { Provider } from 'react-redux'
import { useStore } from '../store'
import '../styles/globals.css'
import Layout2 from '../components/Layout'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Layout2>
        <Component {...pageProps} />
      </Layout2>
    </Provider>

  )
}

export default MyApp
