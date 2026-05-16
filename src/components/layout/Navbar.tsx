import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export function Navbar() {
  const { cartCount } = useCart()

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__left">
          <NavLink to="/" className="navbar__brand">
            <span className="navbar__brand-mark">T</span>
            <span className="navbar__brand-text">
              <span className="navbar__brand-name">TechStore</span>
              <span className="navbar__brand-subtitle">Modern desk essentials</span>
            </span>
          </NavLink>
        </div>

        <nav className="navbar__nav" aria-label="Main navigation">
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
            <span>Cart</span>
            <span className="navbar__cart-count" aria-label={`${cartCount} items in cart`}>
              {cartCount}
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}