import HomeIcon from '@mui/icons-material/Home'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import HistoryIcon from '@mui/icons-material/History'
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

class Const {
  static get DRAWER_WIDTH(): number {
    return 240
  }

  static get MINI_DRAWER_WIDTH(): number {
    return 72
  }

  static get PRIMARY_SIDEBAR_MENU() {
    return [
      {
        path: '/',
        title: 'common.sidebar.home',
        inactiveIcon: HomeOutlinedIcon,
        activeIcon: HomeIcon
      },
      {
        path: '/library',
        title: 'common.sidebar.library',
        inactiveIcon: VideoLibraryOutlinedIcon,
        activeIcon: VideoLibraryIcon
      }
    ]
  }

  static get SECONDARY_SIDEBAR_MENU() {
    return [
      {
        path: '/history',
        title: 'common.sidebar.history',
        inactiveIcon: HistoryOutlinedIcon,
        activeIcon: HistoryIcon
      },
      {
        path: '/music',
        title: 'common.sidebar.music',
        inactiveIcon: HeadsetMicOutlinedIcon,
        activeIcon: HeadsetMicIcon
      }
    ]
  }

  static get NAVIGATION_BAR_ITEMS() {
    return [
      {
        path: '/',
        title: 'common.navigationBar.home',
        inactiveIcon: HomeOutlinedIcon,
        activeIcon: HomeIcon
      },
      {
        path: '/explore',
        title: 'common.navigationBar.explore',
        inactiveIcon: RocketLaunchOutlinedIcon,
        activeIcon: RocketLaunchIcon
      },
      {
        path: '/music',
        title: 'common.navigationBar.music',
        inactiveIcon: HeadsetMicOutlinedIcon,
        activeIcon: HeadsetMicIcon
      },
      {
        path: '/library',
        title: 'common.navigationBar.library',
        inactiveIcon: VideoLibraryOutlinedIcon,
        activeIcon: VideoLibraryIcon
      }
    ]
  }

  static get TOAST_ERROR_CODES() {
    return {}
  }

  static get VALIDATION_ERROR_CODES() {
    return {
      // login
      U10004: ['email', 'password'] // Email or password incorrect
    }
  }
}

export default Const
