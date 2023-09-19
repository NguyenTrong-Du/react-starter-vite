import { PropsWithChildren } from 'react'
import { AppBar, Box, Toolbar } from '@mui/material'

import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'
import Sidebar from 'components/organisms/Sidebar'

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <Box>
      <AppBar
        component="nav"
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Header />
      </AppBar>

      <Box className="flex">
        <Sidebar />
        <Box component="main" className="grow">
          <Toolbar />
          <Box className="bg-red-100 pb-10">{children}</Box>

          <AppBar position="static" color="secondary">
            <Toolbar variant="dense">
              <Footer />
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
    </Box>
  )
}
