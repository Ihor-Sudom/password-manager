// libs
import styled from 'styled-components'
// theme
import { colors, typography } from 'src/theme'

interface InputType {
  filled?: boolean
}

export const Wrapper = styled.div<InputType>`
  font-family: ${typography.avenir};
  padding: 8px;
  border: ${({ filled }) =>
    filled ? `2px solid ${colors.liteSilver}` : `2px solid ${colors.red}`};
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
`
export const Container = styled.div<InputType>`
  position: relative;
`
export const Input = styled.input`
  width: 100%;
  height: 28px;
  padding: 0 10px;
  border-radius: 8px;
  border: none;
  box-sizing: border-box;
  backdrop-filter: blur(27.1828px);
  outline: none;
  font-family: ${typography.avenirNext};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: ${colors.textBlack};
`
export const WarningMessage = styled.div`
  position: absolute;
  bottom: -18px;
  left: 0;
  margin-top: 5px;
  font-size: 12px;
  color: ${colors.red};
`
