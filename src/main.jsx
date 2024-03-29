import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import themes from './styles/themes'
import GlobalStyled from './styles/global'
import { Routes } from './routes'
import { AuthProvider } from './hooks/auth'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
    <GlobalStyled/>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
