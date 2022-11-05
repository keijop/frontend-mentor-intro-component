import React from 'react'
import { StyledSection, StyledButton } from './StyledCommonComponents'
import SignupForm from './SignupForm'

const FormSection: React.FC = () => {
  return (
    <StyledSection as='div'>
      <StyledButton color='purple'>
        <span>Try it free 7 days</span>&nbsp;then $20/mo. thereafter
      </StyledButton>
      <SignupForm />
    </StyledSection>
  )
}

export default FormSection
