import MailIcon from '@mui/icons-material/Mail'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import TemporaryDrawer from 'components/molecules/TemporaryDrawer'
import Const from 'constants/common'
import cn from 'libs/cn'
import { useRecoilValue } from 'recoil'
import sidebarState from 'stores/sidebar'

export default function Sidebar() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))
  const isSidebarOpen = useRecoilValue(sidebarState)

  const isOpen = isSidebarOpen && matches

  return (
    <>
      <TemporaryDrawer open={isSidebarOpen && !matches} />

      <Drawer
        variant="permanent"
        sx={{
          width: isOpen ? Const.DRAWER_WIDTH : Const.MINI_DRAWER_WIDTH,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: isOpen ? Const.DRAWER_WIDTH : Const.MINI_DRAWER_WIDTH,
            boxSizing: 'border-box'
          }
        }}
      >
        <Toolbar />
        <Box sx={{ overflowY: 'auto', overflowX: 'hidden' }}>
          <List>
            {[
              'Inboxxxxxxxxxxxxxxxxxx',
              'Starreddddddddddddddd',
              'Send',
              'Drafts'
            ].map((text, index) => (
              <ListItem key={text} disablePadding className="px-2">
                <ListItemButton
                  className={cn({ 'flex-col !px-0 !py-3': !isOpen })}
                >
                  <ListItemIcon className={cn({ '!min-w-fit': !isOpen })}>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    className={cn({ 'max-w-full': !isOpen })}
                    primaryTypographyProps={{
                      className: cn('truncate', { '!text-xs': !isOpen })
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {isOpen && (
            <>
              <Divider />

              <List>
                {Array.from({ length: 20 }, (_, index) => index).map(
                  (text, index) => (
                    <ListItem key={text} disablePadding className="px-2">
                      <ListItemButton>
                        <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText
                          className="overflow-hidden truncate"
                          primary={text}
                        />
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>
            </>
          )}
        </Box>
      </Drawer>
    </>
  )
}
