// libs
import styled from 'styled-components'
// theme
import { colors, typography } from 'src/theme'

export const LoginContainerStyled = styled.div`
  position: relative;
  width: 320px;
  padding: 80px 30px 30px;
  border-radius: 50px;
  background-color: ${colors.backroundWhite};
  box-shadow: 15px 15px 15px 0px ${colors.shadowMediumBlue};
`
export const LoginTitleStyled = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-family: ${typography.avenirNext};
  color: ${colors.textMediumSilver};
`
export const LoginAvatarStyled = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  top: -60px;
  left: 100px;
  border-radius: 50%;
  background-color: ${colors.backgroundLiteSilver};
  box-shadow: 5px 5px 5px 0px ${colors.shadowMediumSilver};
`
export const FormStyled = styled.form``
export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`
export const InputTitleStyled = styled.p`
  font-family: ${typography.avenirNext};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: ${colors.textMediumSilver};
`
export const ButtonContainer = styled.div`
  margin-top: 30px;
`
export const SignupContainerStyled = styled.div`
  display: flax;
  justify-content: center;
  margin-top: 25px;
`
export const SignupTextStyled = styled.p`
  margin-right: 10px;
  font-family: ${typography.avenirNext};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`
export const LinkTextStyled = styled.a`
  font-family: ${typography.avenirNext};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${colors.oceanBlue};
  :hover {
    cursor: pointer;
  }
`
