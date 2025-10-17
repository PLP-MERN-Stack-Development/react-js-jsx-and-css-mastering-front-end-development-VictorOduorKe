import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import StudentDashboard from './pages/StudentDashboard'
import TaskPage from './pages/TaskPage'
import { ThemeProvider } from './contexts/ThemeContext'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/students" element={<StudentDashboard />} />
              <Route path="/tasks" element={<TaskPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App