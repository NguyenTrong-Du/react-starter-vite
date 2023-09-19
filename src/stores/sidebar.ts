import { atom } from 'recoil'

const sidebarState = atom<boolean>({
  key: 'sidebarState',
  default: true
})

export default sidebarState
