import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Router from './routes'
import { AppContainer } from 'react-hot-loader'

import './index.scss'

ReactDOM.render(<AppContainer>
  <Router />
</AppContainer>, document.getElementById('app'))

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextApp = require('./routes').default
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app'),
    )
  })
}
