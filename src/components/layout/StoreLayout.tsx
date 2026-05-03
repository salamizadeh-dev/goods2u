import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

export function StoreLayout() {
  return (
    <div className="store-shell">
      <Navbar />
      <main className="store-content">
        <Outlet />
      </main>
    </div>
  )
}