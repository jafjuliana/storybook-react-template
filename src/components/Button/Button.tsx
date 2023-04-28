import React from 'react'

import * as S from './Button.styles'
import { ButtonProps } from './Button.interface'

const Button = ({
  disabled = false,
  fullWidth = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  return (
    <S.ButtonStyled
      type="button"
      className={`button--${size}`}
      disabled={disabled}
      fullWidth={fullWidth}
      {...props}
    >
      {label}
    </S.ButtonStyled>
  )
}

export default Button
