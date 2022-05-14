// libs
import styled from 'styled-components'
// theme
import { colors, typography } from 'src/theme'

export const TitleStyled = styled.p`
  text-align: center;
  font-family: ${typography.avenirNext};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: ${colors.textMediumSilver};
`
export const FormStyled = styled.form``
export const BoxStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`
export const BoxTitleStyled = styled.p`
  font-family: ${typography.avenirNext};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`
export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`
export const ButtonBoxCancelStyled = styled.div`
  width: 90px;
  margin-right: 12px;
`
export const ButtonBoxStyled = styled.div`
  width: 90px;
`
