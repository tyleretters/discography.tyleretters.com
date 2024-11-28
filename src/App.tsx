import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/components/themeProvider'
import { ModeToggle } from '@/components/modeToggle'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="container mx-auto">
          <div className="mx-5 my-5 flex justify-between">
            <ModeToggle />
          </div>
        </div>
        <div className="container mx-auto flex place-content-center">wreee</div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
