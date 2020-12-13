import App from 'next/app'
import Layout from '@components/Layout/Layout'

import '../style.css'
function MyApp({ Component, pageProps }) {
    //layout
    return <Layout><Component {...pageProps} /></Layout>
  }
  
  export default MyApp