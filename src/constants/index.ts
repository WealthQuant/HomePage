/**
 * Global Constants Configuration
 */

// Types
export interface CompanyInfo {
  name: string
  phone: string
  foundedYear: number
}

export interface Contact {
  phone: string
  email: string
}

export interface BeianInfo {
  gongan: {
    code: string
    text: string
    url: string
  }
  icp: {
    code: string
    url: string
  }
}

export interface MenuItem {
  key: string
  id: string
}

export interface ThemeColors {
  primary: string
  accent: string
  dark: string
  light: string
}

// Company Info
export const COMPANY_INFO: CompanyInfo = {
  name: 'WealthQuant',
  phone: '+086 - 18800000000',
  foundedYear: 2021
}

// Contact Info
export const CONTACT: Contact = {
  phone: '+086 - 18800000000',
  email: 'contact@wealthquant.com'
}

// Beian Info
export const BEIAN: BeianInfo = {
  gongan: {
    code: '42010502001403',
    text: '鄂公网安备 42010502001403号',
    url: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42010502001403'
  },
  icp: {
    code: '鄂ICP备2021016703号',
    url: 'https://beian.miit.gov.cn/'
  }
}

// Menu Items - translation keys for i18n
export const MENU_ITEMS: MenuItem[] = [
  { key: 'nav.houseQuant', id: '1' },
  { key: 'nav.stockQuant', id: '2' },
  { key: 'nav.collectibleQuant', id: '3' },
  { key: 'nav.about', id: '4' }
]

// Theme Colors
export const COLORS: ThemeColors = {
  primary: 'hsl(221, 100%, 37%)',
  accent: '#FF501E',
  dark: '#000000',
  light: '#FFFFFF'
}

export default {
  COMPANY_INFO,
  CONTACT,
  BEIAN,
  MENU_ITEMS,
  COLORS
}
