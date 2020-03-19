import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'

import { hot } from 'react-hot-loader'

import { HOME } from './routes'

const MainPage = lazy(() => import('pages/main'))

const App = () => {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path={HOME} component={MainPage} />
      </Switch>
    </Suspense>
  )
}

export default hot(module)(App)
