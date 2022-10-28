import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { globalCss } from '@stitches/react'

const globalStyles = globalCss({
  body: { margin: 0, backgroundColor: 'HotPink' },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
