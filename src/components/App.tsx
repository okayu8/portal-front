import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import { Color } from '../const/color'

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/news">
            <div>NEWS</div>
          </Route>
          <Route path="/calendar">
            <div>CALENDAR</div>
          </Route>
          <Route path="/todo">
            <div>TO DO</div>
          </Route>
          <Route path="/settings">
            <div>SETTINGS</div>
          </Route>
          <Route path="/">
            <div>MY PAGE</div>
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "-apple-system","BlinkMacSystemFont","Helvetica Neue","Segoe UI","Hiragino Kaku Gothic ProN","Hiragino Sans","ヒラギノ角ゴ ProN W3","Arial","メイリオ","Meiryo","sans-serif";
    line-height: 1.75;
    font-weight: 400;
    font-size: 16px;
    -webkit-letter-spacing: .03em;
    -moz-letter-spacing: .03em;
    -ms-letter-spacing: .03em;
    letter-spacing: .03em;
    color: ${Color.cover_black};
  }
`

export default App
