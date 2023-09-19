import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import MailIcon from '@mui/icons-material/Mail'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import Const from 'constants/common'
import { useSetRecoilState } from 'recoil'
import sidebarState from 'stores/sidebar'

type Props = {
  open: boolean
}

export default function TemporaryDrawer({ open }: Props) {
  const setOpen = useSetRecoilState(sidebarState)

  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <Drawer
      variant="temporary"
      onClose={handleDrawerToggle}
      open={open}
      ModalProps={{ keepMounted: true }}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 2,
        display: { xs: 'block' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: Const.DRAWER_WIDTH
        }
      }}
    >
      <AppBar component="nav" position="static" color="default">
        <Toolbar>
          <IconButton
            onClick={handleDrawerToggle}
            size="large"
            edge="start"
            color="primary"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="primary"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
        </Toolbar>
      </AppBar>

      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding className="px-2">
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
