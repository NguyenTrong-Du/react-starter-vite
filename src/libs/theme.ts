import {
  createTheme,
  unstable_createMuiStrictModeTheme
} from '@mui/material/styles'

const lightTheme = unstable_createMuiStrictModeTheme()

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

export { lightTheme, darkTheme }
