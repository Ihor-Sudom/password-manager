// types
import { EVariants } from 'src/constants/variants'

// eslint-disable-next-line no-undef
type IButtonDefaultProps = JSX.IntrinsicElements['button']

export interface IButtonProps extends IButtonDefaultProps {
  variant: EVariants
  isToggle?: boolean
  isActive?: boolean
}
