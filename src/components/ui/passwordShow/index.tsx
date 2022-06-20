import React, { FC } from 'react'
// libs
import NextImage from 'next/image'
import styled from 'styled-components'

export const IconContainerStyled = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  :hover {
    cursor: pointer;
  }
`
type IPasswordShow = {
  isShown: boolean
  passwordShowHide: () => void
}

const PasswordShow: FC<IPasswordShow> = ({ isShown, passwordShowHide }) => {
  const icon = isShown ? '/icons/eye-hidden.png' : '/icons/eye-show.png'

  return (
    <IconContainerStyled onClick={passwordShowHide}>
      <NextImage src={icon} layout="fill" priority={false} />
    </IconContainerStyled>
  )
}

export default PasswordShow
