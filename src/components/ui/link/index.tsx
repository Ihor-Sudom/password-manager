import React, { FC } from 'react'
// libs
import NextLink, { LinkProps as DefaultLinkProps } from 'next/link'

interface ILinkProps extends DefaultLinkProps {
  anchorProps?: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
  children: React.ReactNode
}

const Link: FC<ILinkProps> = ({ children, anchorProps, ...props }) => (
  <NextLink passHref {...props}>
    <a {...anchorProps}>{children}</a>
  </NextLink>
)

export default Link
