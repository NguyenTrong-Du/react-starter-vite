import React from 'react'
import './index.css'
import '../locales/i18n'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/about"
          element={
            <div className="text-center">
              <h1 className="text-xl">About</h1>
              <div>
                <Link to="/" className="text-purple-400 underline">
                  Home
                </Link>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
