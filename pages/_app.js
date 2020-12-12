// import App from 'next/app'
import Layout from '@components/Layout/Layout'

function MyApp({ Component, pageProps }) {
    //layout
    return <Layout><Component {...pageProps} /></Layout>
  }
  
  export default MyApp