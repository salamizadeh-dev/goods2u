import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export function Navbar() {
  const { cartCount } = useCart()

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand">
          TechStore
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
            <span className="navbar__cart-count">{cartCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}