// libs
import styled from 'styled-components'
// theme
import { colors, typography } from 'src/theme'

export const TextStyled = styled.p`
  text-align: center;
  font-family: ${typography.avenirNext};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  color: ${colors.textMediumSilver};
`
export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`
export const ButtonBoxCancelStyled = styled.div`
  width: 90px;
  margin-right: 12px;
`
export const ButtonBoxDeleteStyled = styled.div`
  width: 90px;
`
