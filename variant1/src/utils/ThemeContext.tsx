import React, { useEffect, useState, createContext, useContext } from 'react';
export interface Theme {
  id: string;
  name: string;
  subtitle: string;
  primary: string;
  primaryLight: string;
  primaryMedium: string;
  secondary: string;
  secondaryLight: string;
  accent: string;
  accentLight: string;
  gradient: string;
  bg: string;
  card: string;
  cardBorder: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  isDark: boolean;
}
export const THEMES: Theme[] = [
{
  id: 'warm',
  name: 'Warm & Gamified',
  subtitle: 'Orange · Gold · Coral',
  primary: '#E8722A',
  primaryLight: '#FFF8F3',
  primaryMedium: '#FFEDD5',
  secondary: '#D4A017',
  secondaryLight: '#FEF9E7',
  accent: '#E84393',
  accentLight: '#FFF0F6',
  gradient: 'linear-gradient(135deg, #E8722A, #D4A017, #E84393)',
  bg: '#FFF8F3',
  card: '#FFFFFF',
  cardBorder: '#F3E8DE',
  text: '#1F2937',
  textSecondary: '#4B5563',
  textMuted: '#9CA3AF',
  isDark: false
},
{
  id: 'editorial',
  name: 'Editorial & Structured',
  subtitle: 'Crimson · Navy · Gold',
  primary: '#BE3A3A',
  primaryLight: '#FDF6F5',
  primaryMedium: '#F5DADA',
  secondary: '#1E3A5F',
  secondaryLight: '#EEF2F7',
  accent: '#C49A2A',
  accentLight: '#FBF6E9',
  gradient: 'linear-gradient(135deg, #BE3A3A, #1E3A5F, #C49A2A)',
  bg: '#FAF9F7',
  card: '#FFFFFF',
  cardBorder: '#E8E4DF',
  text: '#1A1A1A',
  textSecondary: '#52524E',
  textMuted: '#A3A09A',
  isDark: false
},
{
  id: 'immersive',
  name: 'Immersive & Colorful',
  subtitle: 'Purple · Pink · Cyan',
  primary: '#A855F7',
  primaryLight: 'rgba(168, 85, 247, 0.1)',
  primaryMedium: 'rgba(168, 85, 247, 0.2)',
  secondary: '#EC4899',
  secondaryLight: 'rgba(236, 72, 153, 0.1)',
  accent: '#06B6D4',
  accentLight: 'rgba(6, 182, 212, 0.1)',
  gradient: 'linear-gradient(135deg, #A855F7, #EC4899, #06B6D4)',
  bg: '#0F0A1F',
  card: '#1A1230',
  cardBorder: 'rgba(168, 85, 247, 0.15)',
  text: '#F1EEFF',
  textSecondary: '#B8ADDB',
  textMuted: '#6E5F96',
  isDark: true
},
{
  id: 'zen',
  name: 'Minimal & Zen',
  subtitle: 'Sage · Sand · Sky',
  primary: '#6B8F7B',
  primaryLight: '#F4F7F5',
  primaryMedium: '#DDE8E1',
  secondary: '#A68B6B',
  secondaryLight: '#F7F3EE',
  accent: '#7BA7BC',
  accentLight: '#F0F6F9',
  gradient: 'linear-gradient(135deg, #6B8F7B, #A68B6B, #7BA7BC)',
  bg: '#F5F3F0',
  card: '#FAFAF8',
  cardBorder: '#E5E2DD',
  text: '#2D3130',
  textSecondary: '#5C6360',
  textMuted: '#A3A8A5',
  isDark: false
},
{
  id: 'sunset',
  name: 'Sunset Vibes',
  subtitle: 'Coral · Amber · Plum',
  primary: '#E0605E',
  primaryLight: '#FEF5F2',
  primaryMedium: '#FCDDD6',
  secondary: '#D4940A',
  secondaryLight: '#FEF9E7',
  accent: '#8B5A8B',
  accentLight: '#F8F0F8',
  gradient: 'linear-gradient(135deg, #E0605E, #D4940A, #8B5A8B)',
  bg: '#FEF3EC',
  card: '#FFFFFF',
  cardBorder: '#F0DDD3',
  text: '#3D2019',
  textSecondary: '#6B4F45',
  textMuted: '#B09A91',
  isDark: false
},
{
  id: 'midnight',
  name: 'Midnight Teal',
  subtitle: 'Teal · Blue · Magenta',
  primary: '#14B8A6',
  primaryLight: 'rgba(20, 184, 166, 0.1)',
  primaryMedium: 'rgba(20, 184, 166, 0.2)',
  secondary: '#3B82F6',
  secondaryLight: 'rgba(59, 130, 246, 0.1)',
  accent: '#D946EF',
  accentLight: 'rgba(217, 70, 239, 0.1)',
  gradient: 'linear-gradient(135deg, #14B8A6, #3B82F6, #D946EF)',
  bg: '#0C1117',
  card: '#151D27',
  cardBorder: 'rgba(20, 184, 166, 0.12)',
  text: '#E8F0F2',
  textSecondary: '#8BA3AB',
  textMuted: '#4D6670',
  isDark: true
},
{
  id: 'candy',
  name: 'Candy Pop',
  subtitle: 'Pink · Electric Blue · Lime',
  primary: '#F72585',
  primaryLight: '#FFF0F7',
  primaryMedium: '#FFD6EB',
  secondary: '#4361EE',
  secondaryLight: '#EEF1FE',
  accent: '#4CC94C',
  accentLight: '#EEFBEE',
  gradient: 'linear-gradient(135deg, #F72585, #4361EE, #4CC94C)',
  bg: '#FFFBFE',
  card: '#FFFFFF',
  cardBorder: '#F5E0ED',
  text: '#2B0A1E',
  textSecondary: '#6B4560',
  textMuted: '#B898AC',
  isDark: false
},
{
  id: 'noir',
  name: 'Noir & Gold',
  subtitle: 'Gold · Silver · Rose',
  primary: '#D4A017',
  primaryLight: 'rgba(212, 160, 23, 0.1)',
  primaryMedium: 'rgba(212, 160, 23, 0.2)',
  secondary: '#A0AEC0',
  secondaryLight: 'rgba(160, 174, 192, 0.1)',
  accent: '#E8A0BF',
  accentLight: 'rgba(232, 160, 191, 0.08)',
  gradient: 'linear-gradient(135deg, #D4A017, #A0AEC0, #E8A0BF)',
  bg: '#09090B',
  card: '#18181B',
  cardBorder: 'rgba(212, 160, 23, 0.12)',
  text: '#FAFAFA',
  textSecondary: '#A1A1AA',
  textMuted: '#52525B',
  isDark: true
},
{
  id: 'ocean',
  name: 'Ocean Breeze',
  subtitle: 'Deep Blue · Seafoam · Sand',
  primary: '#1D4ED8',
  primaryLight: '#EFF6FF',
  primaryMedium: '#DBEAFE',
  secondary: '#0D9488',
  secondaryLight: '#F0FDFA',
  accent: '#CA8A04',
  accentLight: '#FEFCE8',
  gradient: 'linear-gradient(135deg, #1D4ED8, #0D9488, #CA8A04)',
  bg: '#F0F9FF',
  card: '#FFFFFF',
  cardBorder: '#D4E4F7',
  text: '#0C2D57',
  textSecondary: '#3B6494',
  textMuted: '#93B4D4',
  isDark: false
},
{
  id: 'arcade',
  name: 'Retro Arcade',
  subtitle: 'Neon Green · Orange · Cyan',
  primary: '#22C55E',
  primaryLight: 'rgba(34, 197, 94, 0.1)',
  primaryMedium: 'rgba(34, 197, 94, 0.2)',
  secondary: '#F97316',
  secondaryLight: 'rgba(249, 115, 22, 0.1)',
  accent: '#22D3EE',
  accentLight: 'rgba(34, 211, 238, 0.1)',
  gradient: 'linear-gradient(135deg, #22C55E, #F97316, #22D3EE)',
  bg: '#0A0A0F',
  card: '#141420',
  cardBorder: 'rgba(34, 197, 94, 0.12)',
  text: '#E4FFE4',
  textSecondary: '#8ADB8A',
  textMuted: '#3D6B3D',
  isDark: true
},
{
  id: 'blossom',
  name: 'Cherry Blossom',
  subtitle: 'Blush · Rose · Indigo',
  primary: '#DB2777',
  primaryLight: '#FDF2F8',
  primaryMedium: '#FCE7F3',
  secondary: '#BE185D',
  secondaryLight: '#FFF1F2',
  accent: '#6366F1',
  accentLight: '#EEF2FF',
  gradient: 'linear-gradient(135deg, #DB2777, #F9A8D4, #6366F1)',
  bg: '#FFF5F9',
  card: '#FFFFFF',
  cardBorder: '#F5D0E0',
  text: '#4A0D2B',
  textSecondary: '#8B4066',
  textMuted: '#C9A0B5',
  isDark: false
},
{
  id: 'jungle',
  name: 'Jungle Canopy',
  subtitle: 'Emerald · Burnt Orange · Teal',
  primary: '#059669',
  primaryLight: 'rgba(5, 150, 105, 0.1)',
  primaryMedium: 'rgba(5, 150, 105, 0.2)',
  secondary: '#EA580C',
  secondaryLight: 'rgba(234, 88, 12, 0.1)',
  accent: '#0891B2',
  accentLight: 'rgba(8, 145, 178, 0.1)',
  gradient: 'linear-gradient(135deg, #059669, #EA580C, #0891B2)',
  bg: '#071209',
  card: '#0F1F14',
  cardBorder: 'rgba(5, 150, 105, 0.15)',
  text: '#E6F5EC',
  textSecondary: '#8BBFA0',
  textMuted: '#3D6B50',
  isDark: true
}];

interface ThemeContextType {
  theme: Theme;
  setThemeId: (id: string) => void;
  currentThemeId: string;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({ children }: {children: React.ReactNode;}) {
  const [currentThemeId, setCurrentThemeId] = useState('warm');
  useEffect(() => {
    const saved = localStorage.getItem('learnway-theme');
    // Only restore light themes by default — don't auto-load dark themes
    if (saved && THEMES.find((t) => t.id === saved)) {
      setCurrentThemeId(saved);
    }
  }, []);
  const setThemeId = (id: string) => {
    setCurrentThemeId(id);
    localStorage.setItem('learnway-theme', id);
  };
  const theme = THEMES.find((t) => t.id === currentThemeId) || THEMES[0];
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setThemeId,
        currentThemeId
      }}>
      
      {children}
    </ThemeContext.Provider>);

}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}