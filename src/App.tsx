import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/components/themeProvider'
import { ModeToggle } from '@/components/modeToggle'
import Discography from '@/components/Discography'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="container mx-auto">
          <div className="mx-5 my-5 flex justify-between">
            <ModeToggle />
          </div>
        </div>
        <div className="container mx-auto">
          <Discography />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
