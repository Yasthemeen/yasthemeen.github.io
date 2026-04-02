import React from 'react';
import { ThemeProvider, useTheme } from './utils/ThemeContext';
import { LandingVariant1 } from './pages/LandingVariant1';
function AppContent() {
  const { theme } = useTheme();
  return (
    <div
      className="min-h-screen font-sans transition-colors duration-500"
      style={{
        backgroundColor: theme.bg,
        color: theme.text
      }}>
      
      <LandingVariant1 onLoginClick={() => {}} />
    </div>);

}
export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>);

}