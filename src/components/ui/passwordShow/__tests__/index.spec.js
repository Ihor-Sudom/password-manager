import React from 'react'
import NextImage from 'next/image'
import PasswordShow, { IconContainerStyled } from '../index.tsx'

const wrapperPasswordShow = (props) => shallow(<PasswordShow {...props} />)

const props = {
  isShown: true,
  passwordShowHide: jest.fn()
}

const component = wrapperPasswordShow(props)

describe('PasswordShow component', () => {
  it('Should render PasswordShow component', () => {
    expect(component.length).toBe(1)
  })

  it('Should change picture depending on props', () => {
    const props = {
      isShown: false,
      passwordShowHide: jest.fn()
    }
    
    const wrapper = wrapperPasswordShow(props)

    expect(component.find(NextImage).prop('src')).toEqual('/icons/eye-hidden.png')
    expect(wrapper.find(NextImage).prop('src')).toEqual('/icons/eye-show.png')
  })
})