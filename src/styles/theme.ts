// theme.ts
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string
    secondaryColor: string
    font: string
    chineseFont: string
    secondaryFont: string
  }
}

export const lightTheme: DefaultTheme = {
  primaryColor: '#E4F5FF',
  secondaryColor: '#022534',
  font: 'Roboto',
  chineseFont: 'chineseFont',
  secondaryFont: 'secondaryFont',
}

export const darkTheme: DefaultTheme = {
  primaryColor: '#022534',
  secondaryColor: '#E4F5FF',
  font: 'Roboto',
  chineseFont: 'chineseFont',
  secondaryFont: 'secondaryFont',
}
