import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { useTheme } from '../hooks/useTheme.js'

const titles = {
  '/': 'Safdher Sahai | Lead Engineer',
  '/services': 'Services | Safdher Sahai',
  '/stack': 'Stack | Safdher Sahai',
  '/work': 'Work | Safdher Sahai',
  '/experience': 'Experience | Safdher Sahai',
  '/contact': 'Contact | Safdher Sahai',
}

export default function Layout() {
  const { theme, toggle } = useTheme()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0) // new page starts at the top
    document.title = titles[pathname] ?? titles['/']
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Header theme={theme} onToggle={toggle} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
