import { globalStyles, styled } from '../../stitches.config'
import Footer from './Footer'
import Section from './Section'
import Wrapper from './Wrapper'

const StyledApp = styled('div', {
  height: '100%',
  width: '100%',
})

export const App = () => {
  globalStyles()
  return (
    <StyledApp className='App'>
      <Wrapper>
        <Section>
          <h1>Learn to code by watching others </h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable. Try it free 7 days then $20/mo. thereafter First Name
            Last Name Email Address Password Claim your free trial By clicking
            the button, you are agreeing to our Terms and Services
          </p>
        </Section>
        <Section />
      </Wrapper>
      <Footer />
    </StyledApp>
  )
}

export default App
