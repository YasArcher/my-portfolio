import Navbar from "./components/Navbar"
import Experiencia from "./components/Experiencia"
import Presentacion from "./components/Presentacion"
import Proyectos from "./components/Proyectos"
import SobreMi from "./components/SobreMi"
import Certificaciones from "./components/Certificaciones"
import Footer from "./components/footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ThemeProvider, useTheme } from "./context/ThemeContext"

function AppContent() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
      <div className="pt-16 bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-white transition-all duration-300">
        <Navbar />
        <Presentacion />
        <SobreMi />
        <Experiencia />
        <Proyectos />
        <Certificaciones />
        <Footer />
        
        {/* Toast Container con estilos para modo oscuro */}
        <ToastContainer 
          position="bottom-right" 
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={theme === 'dark' ? 'dark' : 'light'}
          toastClassName={() => 
            theme === 'dark' 
              ? "relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-gray-800 text-white"
              : "relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-white text-gray-900"
          }
        />
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App