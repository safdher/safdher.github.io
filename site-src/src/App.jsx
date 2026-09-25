import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Stack from './pages/Stack.jsx'
import Work from './pages/Work.jsx'
import Experience from './pages/Experience.jsx'
import Contact from './pages/Contact.jsx'

// HashRouter keeps URLs like /#/work, which works on GitHub Pages with no server config.
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="stack" element={<Stack />} />
          <Route path="work" element={<Work />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
