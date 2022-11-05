import React from 'react'
import { styled } from '../../stitches.config'

const StyledSection = styled('section', {
  flexBasis: '50%',
  flexGrow: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '5rem',
  '& h1': {
    fontSize: '3rem',
  },
})

type props = {
  children?: JSX.Element[]
}

const Section: React.FC<props> = ({ children }) => {
  return <StyledSection>{children}</StyledSection>
}

export default Section
