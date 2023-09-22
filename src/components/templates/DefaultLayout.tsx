import { AppBar, Box, Theme, Toolbar, useMediaQuery } from '@mui/material'
import { PropsWithChildren } from 'react'

import HideOnScroll from 'components/atoms/HideOnScroll'
import BottomNavigationBar from 'components/organisms/BottomNavigationBar'
import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'
import Sidebar from 'components/organisms/Sidebar'
import cn from 'libs/cn'

export default function DefaultLayout({ children }: PropsWithChildren) {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down('tablet')
  )

  return (
    <Box>
      {isMobile ? (
        <HideOnScroll>
          <AppBar>
            <Header />
          </AppBar>
        </HideOnScroll>
      ) : (
        <AppBar
          component="nav"
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1
          }}
        >
          <Header />
        </AppBar>
      )}

      <Box className="flex">
        {!isMobile && <Sidebar />}

        <Box component="main" className="grow">
          <Toolbar />

          <Box
            className={cn('bg-red-100', {
              'pb-10': !isMobile
            })}
          >
            {children}
          </Box>

          <AppBar position="static" color="secondary">
            <Toolbar variant="dense">
              <Footer />
            </Toolbar>
          </AppBar>

          {isMobile && <Toolbar />}
        </Box>
      </Box>

      {isMobile && <BottomNavigationBar />}
    </Box>
  )
}
