import React, { FC } from 'react'
// libs
import styled from 'styled-components'
// theme
import { colors } from 'src/theme'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.backroundLiteBlue};
`
interface ILayout {
  children: React.ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <Wrapper>
      { children }
    </Wrapper>
  )
}

export default Layout
