interface CartSummaryProps {
  subtotal: number
}

export function CartSummary({ subtotal }: CartSummaryProps) {
  return (
    <aside className="cart-summary">
      <div className="cart-summary__header">
        <h3 className="cart-summary__title">Order Summary</h3>
        <p className="cart-summary__subtitle">
          Review your current order details.
        </p>
      </div>

      <div className="cart-summary__row">
        <span>Subtotal</span>
        <strong>${subtotal.toFixed(2)}</strong>
      </div>

      <div className="cart-summary__row">
        <span>Shipping</span>
        <span>Calculated at checkout</span>
      </div>

      <div className="cart-summary__row">
        <span>Taxes</span>
        <span>Not included</span>
      </div>

      <div className="cart-summary__divider" />

      <div className="cart-summary__row cart-summary__row--total">
        <span>Estimated Total</span>
        <strong>${subtotal.toFixed(2)}</strong>
      </div>

      <p className="cart-summary__note">
        This MVP does not include checkout or payment processing.
      </p>
    </aside>
  )
}