import { PropsWithChildren } from 'react'
import Const from 'constants/common'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    tablet: true
    md: true
    lg: true
    xl: true
  }
}

export type RouteObject = {
  path: string
  layout?: ({ children }: PropsWithChildren) => JSX.Element
  variety?: 'guardOnLogged' | 'public' | 'protect'
  children: NestedRoute[]
}

type NestedRoute = {
  name: string
  path: string
  element: JSX.Element
  index?: boolean
  layout?: ({ children }: PropsWithChildren) => JSX.Element
  role?: string[]
}

export type CurrentUser = {
  id: number
  email: string
  role?: string
}

export type TokenBundle = {
  accessToken: string
  refreshToken: string
}

export type APIParams =
  | Record<string, string | number | string[] | number[]>
  | undefined

export type Theme = 'light' | 'dark'

export type Method = 'post' | 'put' | 'delete' | 'patch' | 'get'

export type MutationFnVariables = {
  url: string
  method?: Method
  data?: Record<string, unknown>
  params?: APIParams
  headers?: any
  disableParentOnError?: boolean
  errorMessage?: string
}

export type ToastErrorCode = keyof typeof Const.TOAST_ERROR_CODES

export type ValidationErrorCode = keyof typeof Const.VALIDATION_ERROR_CODES

export type SidebarStatus = {
  isPermanentDrawerCollapsed: boolean
  isTemporaryDrawerCollapse: boolean
}
