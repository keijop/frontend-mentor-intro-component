import { globalStyles } from '../stitches.config'
import Footer from './components/Footer'

export const App = () => {
  globalStyles()
  return (
    <div className='App'>
      <Footer />
    </div>
  )
}

export default App
