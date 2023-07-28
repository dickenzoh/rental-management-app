import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/global/Sidebar'
import Topbar from './components/global/Topbar'
import { ColorModeContext, useMode } from "./theme";
import Dashboard from './pages/Dashboard/Dashboard';
import { CssBaseline, ThemeProvider } from '@mui/material';
import CalendarPage from './pages/Calendar/CalendarPage';
import LeasePage from './pages/Lease/LeasePage';
import ProfilePage from './pages/Profile/ProfilePage';
import FaqsPage from './pages/FaqsPage/FaqsPage';
import TenantsPage from './pages/Tenants/TenantsPage';
import MassagesPage from './pages/Messages/MessagesPage';
import PaymentsPage from './pages/Payments/PaymentsPage';
import HousesPage from './pages/House/HousePage';


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app" >
            <Sidebar isSidebar={isSidebar} />
            <main style={{ width: '100%' }}>
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<TenantsPage />} />
                <Route path="/tenants" element={<TenantsPage />} />
                <Route path="/payments" element={<PaymentsPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/house" element={<HousesPage />} />
                <Route path="/lease" element={<LeasePage />} />
                <Route path="/messages" element={<MassagesPage />} />
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
