import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import App from './App'
import { store, persistor } from 'store'
import { PersistGate } from 'redux-persist/integration/react'

const GlobalStyle = createGlobalStyle`
  #root {
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f0f0f0;
  }
  body {
    margin: 0
  }
`

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />

      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
