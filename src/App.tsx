import React, { ReactElement, useState } from 'react'

import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { useTranslation } from 'react-i18next'

function App(): ReactElement {
  const [count, setCount] = useState(0)
  const { t, i18n } = useTranslation()

  const handleClick = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('ja')
    } else i18n.changeLanguage('en')
  }

  return (
    <div className="p-20 text-red-500 border shadow-xl border-gray-50 rounded-xl">
      <main>
        <p className="pb-3 text-2xl">Hello Vite + React + Tailwind CSS!</p>
        <p>
          <Button
            className="pt-1 pb-1 pl-2 pr-2 text-sm text-purple-100 bg-purple-400 rounded"
            onClick={() => setCount((prev) => prev + 1)}
          >
            count is: {count}
          </Button>
        </p>

        <div>{t('common.test')}</div>

        <Stack spacing={2} direction="row">
          <Button onClick={handleClick} variant="text">
            Text
          </Button>
          <Button onClick={handleClick} variant="contained">
            Change language
          </Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <Link to="/about" className="text-purple-400 underline">
          About
        </Link>

        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </main>
    </div>
  )
}

export default App
