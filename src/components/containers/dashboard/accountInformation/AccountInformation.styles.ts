// libs
import styled from 'styled-components'
// theme
import { colors, typography } from 'src/theme'

export const Wrapper = styled.div`
  flex-grow: 1;
`
export const InformationContainerStyled = styled.div`
  display: flex;
`
export const InformationTitleStyled = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  font-family: ${typography.avenirNext};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: ${colors.textMediumSilver};
`
export const ButtonContainerStyled = styled.div`
  display: flex;
`
export const ButtonEditStyled = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  :hover {
    cursor: pointer;
  }
`
export const ButtonDeleteStyled = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  :hover {
    cursor: pointer;
  }
`
export const ContentStyled = styled.div`
  padding-left: 20px;
`
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
