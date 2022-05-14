import React, { FC } from 'react'
// libs
import NextImage from 'next/image'
import Link from 'src/components/ui/link'
// types
import { IAccount } from 'src/types'
// styles
import {
  MainPanelStyled,
  LoginContainerStyled,
  TextStyled,
  AvatarContainerStyled,
  TitleConteinerStyled,
  TitleStyled,
} from './MainPanel.styles'

interface IMainPanel {
  userInfo: IAccount
  userIdQuery: number
}

const MainPanel: FC<IMainPanel> = ({ userInfo, userIdQuery }) => {
  return (
    <MainPanelStyled>
      <TitleConteinerStyled>
        <TitleStyled>
          Welcome {userInfo.firstName} {userInfo.lastName}!
        </TitleStyled>
      </TitleConteinerStyled>
      <LoginContainerStyled>
        <AvatarContainerStyled>
          <NextImage src={'/icons/people-sign-in.png'} width={30} height={30} priority={false} />
        </AvatarContainerStyled>
        {userIdQuery ? (
          <Link href={'/'}>Logout</Link>
        ) : (
          <>
            <Link href={'/login'}>Login</Link>
            <TextStyled>/</TextStyled>
            <Link href={'/register'}>Register</Link>
          </>
        )}
      </LoginContainerStyled>
    </MainPanelStyled>
  )
}

export default MainPanel
