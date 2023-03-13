import React, { HTMLAttributes, FC, ReactNode } from 'react'
import * as S from './styles'

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  /** Children */
  children: ReactNode;
  /** Estica o componente ocupando 100% do conteudo do elemento pai */
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({children, fullWidth = false, ...props}) => {
  return (
    <S.ButtonBase {...props}>{children}</S.ButtonBase>
  )
}

export default Button
