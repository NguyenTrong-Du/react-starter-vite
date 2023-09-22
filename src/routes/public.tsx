import AboutPage from 'pages/about'
import ExplorePage from 'pages/explore'
import HistoryPage from 'pages/history'
import HomePage from 'pages/home'
import LibraryPage from 'pages/library'
import MusicPage from 'pages/music'
import { RouteObject } from 'types'

const publicRoutes: RouteObject[] = [
  {
    path: '',
    variety: 'public',
    children: [
      {
        name: 'home',
        path: '',
        index: true,
        element: <HomePage />
      },
      {
        name: 'about',
        path: 'about',
        element: <AboutPage />
      },
      {
        name: 'explore',
        path: 'explore',
        element: <ExplorePage />
      },
      {
        name: 'library',
        path: 'library',
        element: <LibraryPage />
      },
      {
        name: 'history',
        path: 'history',
        element: <HistoryPage />
      },
      {
        name: 'music',
        path: 'music',
        element: <MusicPage />
      }
    ]
  }
]

export default publicRoutes
