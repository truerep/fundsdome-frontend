import '@/styles/globals.css'
import NextTopLoader from 'nextjs-toploader';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextTopLoader 
        height={2}
        color="#9F85F7"
        shadow="0 0 10px #9F85F7,0 0 5px #9F85F7"
        showSpinner={false}
      />
      <Component {...pageProps} />
    </>
  )
}
