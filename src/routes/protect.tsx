import ProfilePage from 'pages/profile'
import { RouteObject } from 'types'

const protectRoutes: RouteObject[] = [
  {
    path: '',
    children: [
      {
        name: 'profile',
        path: 'profile',
        element: <ProfilePage />
      }
    ]
  }
]

export default protectRoutes
