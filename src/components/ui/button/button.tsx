import React from 'react'
// styles
import Button from './button.styles'
// types
import { IButtonProps } from './button.types'

const ButtonComponent: React.FC<IButtonProps> = ({ ref, variant, onClick, children, ...rest }) => {
  return (
    <Button variant={variant} onClick={onClick} {...rest}>
      {children}
    </Button>
  )
}

export default ButtonComponent
