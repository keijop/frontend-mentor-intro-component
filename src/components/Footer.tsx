import React from 'react'
import { styled } from '../../stitches.config'

const StyledFooter = styled('footer', {
  position: 'absolute',
  bottom: '5px',
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: '11px',
  textAlign: 'center',
  '& a': {
    color: '$greyBlue500',
  },
})

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by <a href='https://github.com/keijop'>Keijo P</a>.
      </p>
    </StyledFooter>
  )
}

export default Footer
