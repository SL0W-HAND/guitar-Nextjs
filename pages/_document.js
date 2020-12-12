import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
  render() {
    return (
      <Html>
        <head>
            <title>Guitar store</title>
        </head>
        <body className='lol'>
          <Main /> 
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument