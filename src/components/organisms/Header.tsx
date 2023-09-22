import MenuIcon from '@mui/icons-material/Menu'
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material'
import useAuth from 'hooks/useAuth'
import { ChangeEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import themeState from 'stores/theme'

import ThemeSwitch from 'components/atoms/ThemeSwitch'
import LanguageSwitcher from 'components/molecules/LanguageSwitcher'
import useSidebar from 'hooks/useSidebar'

export default function Header() {
  const [theme, setTheme] = useRecoilState(themeState)
  const { profile, logout } = useAuth()
  const {
    tabletMatched,
    tabletOnlyMatched,
    handleTogglePermanentDrawer,
    handleToggleTemporaryDrawer
  } = useSidebar()

  const handleToggleDrawer = () => {
    if (tabletOnlyMatched) {
      handleToggleTemporaryDrawer()
      return
    }

    handleTogglePermanentDrawer()
  }

  const handleChangeTheme = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    const newTheme = checked ? 'dark' : 'light'

    setTheme(newTheme)
  }

  const handleLogout = () => {
    if (!profile) return
    logout()
  }

  return (
    <Toolbar>
      {tabletMatched && (
        <IconButton
          onClick={handleToggleDrawer}
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        MUI
      </Typography>
      <Box>
        <LanguageSwitcher />

        <FormControlLabel
          className="select-none"
          control={
            <ThemeSwitch
              checked={theme === 'dark'}
              onChange={handleChangeTheme}
            />
          }
          label="Mode"
        />

        {tabletMatched &&
          [
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' }
          ].map(({ label, href }) => (
            <Button
              key={label}
              component={NavLink}
              to={href}
              sx={{ color: '#fff' }}
            >
              {label}
            </Button>
          ))}

        {tabletMatched && (
          <Button
            component={profile ? 'div' : NavLink}
            to={profile ? undefined : '/login'}
            sx={{ color: '#fff' }}
            onClick={handleLogout}
          >
            {profile ? 'Logout' : 'Login'}
          </Button>
        )}
      </Box>
    </Toolbar>
  )
}
