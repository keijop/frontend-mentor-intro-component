import React from 'react'
import { styled } from '../../stitches.config'

const StyledWrapper = styled('div', {
  width: '1440px',
  height: '100%',
  backgroundImage: 'url("../../assets/bg-intro-desktop.png")',
  display: 'flex',
})

type props = {
  children?: JSX.Element[]
}

const Wrapper: React.FC<props> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

export default Wrapper
