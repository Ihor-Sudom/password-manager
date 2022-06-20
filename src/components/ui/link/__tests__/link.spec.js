import React from 'react'
import NextLink from 'next/link'
import Link from '../index.tsx'

const wrapperLink = (props) => shallow(<Link {...props} />)

const props = { children: 'click me' }

const component = wrapperLink(props)

describe('Link component', () => {
  it('Should render Link with children property', () => {
    expect(component.find(NextLink).text()).toEqual('click me')
  })
})
