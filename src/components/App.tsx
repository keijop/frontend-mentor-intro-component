import { globalStyles, styled } from '../../stitches.config'
import Footer from './Footer'
import { StyledMainContainer } from './StyledCommonComponents'
import TextSection from './TextSection'
import FormSection from './FormSection'

const Wrapper = styled('div', {
  position: 'relative',
  height: '100vh',
  width: '100%',
  backgroundImage: 'url("../../assets/bg-intro-desktop.png")',
  backgroundRepeat: 'repeat',
  backgroundSize: 'cover',
  '@bp1': {
    height: '100%',
    padding: '4rem 0',
  },
})

export const App = () => {
  globalStyles()
  return (
    <Wrapper className='App'>
      <StyledMainContainer>
        <TextSection />
        <FormSection />
      </StyledMainContainer>
      <Footer />
    </Wrapper>
  )
}

export default App
