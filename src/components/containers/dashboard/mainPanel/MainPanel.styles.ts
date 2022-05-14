// libs
import styled from 'styled-components'
// theme
import { colors, typography } from 'src/theme'

export const MainPanelStyled = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 2px solid ${colors.liteSilver};
`
export const TitleConteinerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`
export const TitleStyled = styled.p`
  font-family: ${typography.avenirNext};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`
export const LoginContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const AvatarContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  margin-right: 15px;
  border: 2px solid ${colors.liteSilver};
  border-radius: 50%;
`
export const TextStyled = styled.p`
  margin: 0 10px;
`
