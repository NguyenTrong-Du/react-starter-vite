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
import { useRecoilState, useSetRecoilState } from 'recoil'
import themeState from 'stores/theme'

import ThemeSwitch from 'components/atoms/ThemeSwitch'
import LanguageSwitcher from 'components/molecules/LanguageSwitcher'
import sidebarState from 'stores/sidebar'

export default function Header() {
  const setOpen = useSetRecoilState(sidebarState)

  const [theme, setTheme] = useRecoilState(themeState)
  const { profile, logout } = useAuth()

  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState)
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
      <IconButton
        onClick={handleDrawerToggle}
        size="large"
        edge="start"
        color="inherit"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        MUI
      </Typography>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
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

        {[
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

        <Button
          component={profile ? 'div' : NavLink}
          to={profile ? undefined : '/login'}
          sx={{ color: '#fff' }}
          onClick={handleLogout}
        >
          {profile ? 'Logout' : 'Login'}
        </Button>
      </Box>
    </Toolbar>
  )
}
