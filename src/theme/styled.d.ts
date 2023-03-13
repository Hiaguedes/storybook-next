import { Theme as BaseTheme } from '.'

declare module '@emotion/react' {
  export interface Theme extends BaseTheme {}
}
