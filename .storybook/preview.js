import { createGlobalStyle } from 'styled-components'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
]

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
    color: rgba(0,0,0,0.87);
  }
`
