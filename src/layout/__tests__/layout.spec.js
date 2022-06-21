import React from 'react'
import Layout from '../index.tsx'
import Login from '../../components/containers/login/Login.tsx'
import { LoginContainerStyled } from '../../components/containers/login/Login.styles.ts'

const wrapperLayout = (props) => shallow(<Layout {...props} />)
const wrapperLogin = () => shallow(<Login />)
const componentLogin = wrapperLogin()

const props = { children: componentLogin }

const component = wrapperLayout(props)

describe('Layout', () => {
  it('Should render Layout with children property', () => {
    expect(component.find(LoginContainerStyled).length).toBe(1)
  })
})
