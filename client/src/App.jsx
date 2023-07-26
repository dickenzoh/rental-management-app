import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/global/Sidebar'
import Topbar from './components/global/Topbar'
import { ColorModeContext, useMode } from "./theme";
import Dashboard from './pages/Dashboard/Dashboard';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Pauments from './pages/Payments/Pauments';
import CalendarPage from './pages/Calendar/CalendarPage';
import HousePage from './pages/House/HousePage';
import LeasePage from './pages/Lease/LeasePage';
import MessagesPage from './pages/Messages/MessagesPage';
import ProfilePage from './pages/Profile/ProfilePage';
import FaqsPage from './pages/Faqs/FaqsPage';
import TenantsPage from './pages/Tenants/TenantsPage';


function App() {
  const [count, setCount] = useState(0)
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app" >
            <Sidebar isSidebar={isSidebar} />
            <main >
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/tenants" element={<TenantsPage />} />
                <Route path="/payments" element={<Pauments />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/house" element={<HousePage />} />
                <Route path="/lease" element={<LeasePage />} />
                <Route path="/messages" element={<MessagesPage />} />
                <Route path="/profile" element={<ProfilePage />} /> 
                <Route path="/calendar" element={<CalendarPage />} /> 
                <Route path="/faqs" element={<FaqsPage />} />
              </Routes> 
            </main>
          </div>
        </ThemeProvider>
        </ColorModeContext.Provider>
  )
}

export default App
