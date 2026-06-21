import { ThemeProvider } from "@/providers/theme-provider"
import HomePage from "@/pages/home"

export default function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}