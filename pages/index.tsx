import React from 'react'
import Button from '../src/components/Button'
import ThemeProvider from '../src/theme/provider'

function Home() {
  return (
    <main>
      <ThemeProvider>
        <p>Home</p>
        <Button>Botao!</Button>
      </ThemeProvider>
    </main>
  )
}

export default Home
