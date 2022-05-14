// libs
import styled from 'styled-components'
// theme
import { colors, typography } from 'src/theme'

export const RegisteredContainerStyled = styled.div`
  display: flex;
  padding: 10px 0;
`
export const AccountsContainerStyled = styled.div`
  width: 35%;
  border-right: 2px solid ${colors.liteSilver};
`
export const AccountsContentStyled = styled.div`
  height: 400px;
  overflow-y: auto;
`
export const AccountNameStyled = styled.p`
  margin-bottom: 15px;
  font-family: ${typography.avenirNext};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  :hover {
    cursor: pointer;
    color: ${colors.oceanBlue};
  }
`
export const AccountsTitleStyled = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-family: ${typography.avenirNext};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: ${colors.textMediumSilver};
`
export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
export const UnregisteredStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ImageContainerStyled = styled.div`
  margin-top: 100px;
`
export const UnregisteredTitleStyled = styled.p`
  padding: 0 120px;
  margin-top: 30px;
  text-align: center;
  font-family: ${typography.avenirNext};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: ${colors.textMediumSilver};
`
