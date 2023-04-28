import styled from 'styled-components'

import { ButtonProps } from './Button.interface'

export const ButtonStyled = styled.button<ButtonProps>`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary};
  background: #f62079;
  width: ${(props) => (props.fullWidth ? '100%' : '200px')};

  &:disabled {
    background-color: rgba(195, 195, 196, 0.16);
    color: rgba(41, 41, 41, 0.32);
    cursor: initial;
  }

  &.button {
    &--small {
      font-size: 12px;
      padding: 10px 16px;
    }

    &--medium {
      font-size: 16px;
      padding: 11px 20px;
    }

    &--large {
      font-size: 18px;
      padding: 12px 24px;
    }
  }
`
