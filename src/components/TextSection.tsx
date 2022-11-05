import { styled } from '../../stitches.config'
import { StyledSection } from './StyledCommonComponents'

const StyledSectionParagraph = styled('p', {
  fontSize: '1.2rem',
  '@bp1': {
    fontSize: '1rem',
  },
})

const TextSection = () => {
  return (
    <StyledSection textCenter>
      <h1>Learn to code by watching others </h1>
      <StyledSectionParagraph>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </StyledSectionParagraph>
    </StyledSection>
  )
}

export default TextSection
