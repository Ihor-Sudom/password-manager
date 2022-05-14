import React from 'react'
// libs
import type { AppProps } from 'next/app'
import { css, createGlobalStyle } from 'styled-components'
// styles
import normalize from 'normalize.css'

const libsStyles = css`
  ${normalize};
`
const GlobalStyle = createGlobalStyle`
  ${libsStyles};

  * {
    box-sizing: border-box;
  }

  html, body, #__next {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: Avenir Next, Avenir, -apple-system, BlinkMacSystemFont, Roboto, system-font, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p, ul {
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }

  a {
    text-decoration: none;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
