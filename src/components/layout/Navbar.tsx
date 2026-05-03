import { NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand">
          Goods 2 U
        </NavLink>

        <nav className="navbar__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
          >
            Cart
          </NavLink>
        </nav>
      </div>
    </header>
  )
}