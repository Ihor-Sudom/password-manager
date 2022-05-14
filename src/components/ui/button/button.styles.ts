// libs
import styled, { css } from 'styled-components'
// theme
import { colors, typography } from 'src/theme'
// types
import { EVariants } from 'src/constants/variants'

const defaultStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${typography.avenirNext};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0;
  text-align: center;
  white-space: nowrap;
  border-radius: 8px;
  border: none;
  padding: 14px;
  cursor: pointer;
  position: relative;
  height: 48px;
`
const activeStyles = css<{ isActive?: boolean }>`
  border: 2px solid transparent;
  background-color: ${colors.oceanBlue};
`
const primaryStyles = css`
  color: ${colors.white};
  background-color: ${colors.oceanBlue};
  box-shadow: 3px 3px 3px 0px ${colors.shadowMediumBlue};
`
const secondaryStyles = css<{ isActive?: boolean; isToggle?: boolean }>`
  font-family: ${typography.avenirNext};
  color: ${colors.textBlack};
  border: 2px solid ${colors.liteSilver};
  background-color: ${colors.liteSilver};
  :hover {
    ${({ isActive, isToggle }) =>
      isToggle && !isActive && `background-color: ${colors.liteSilver}`};
  }

  ${({ isActive }) => isActive && activeStyles};
`
export const Button = styled.button<{ variant: EVariants }>`
  ${defaultStyles};

  ${({ variant }) => variant === EVariants.PRIMARY && primaryStyles};
  ${({ variant }) => variant === EVariants.SECONDARY && secondaryStyles};
`
export default Button
