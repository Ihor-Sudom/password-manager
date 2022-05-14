import React, { memo } from 'react'
// styles
import { Wrapper, Input, WarningMessage, Container } from './input.styles'
// types
import { IInputProps } from './input.types'
import { UseFormRegisterReturn } from 'react-hook-form'

const InputComponent = ({ leftIcon, rightIcon, label, register, errors, ...rest }: IInputProps) => {
  const REGISTER: UseFormRegisterReturn = register || ({} as UseFormRegisterReturn)
  const { name: REGISTER_NAME = '', ...registerSpread } = REGISTER
  const FILLED = !errors || !errors[REGISTER_NAME]

  const name = REGISTER_NAME || label

  return (
    <Container>
      <Wrapper filled={FILLED}>
        {leftIcon}
        <Input {...rest} name={name} {...registerSpread} />
        {rightIcon}
      </Wrapper>

      {errors && errors[REGISTER_NAME] && (
        <WarningMessage>{errors[REGISTER_NAME].message}</WarningMessage>
      )}
    </Container>
  )
}

export default memo(InputComponent)
