interface CartSummaryProps {
  subtotal: number
}

export function CartSummary({ subtotal }: CartSummaryProps) {
  return (
    <aside className="cart-summary">
      <h3 className="cart-summary__title">Order Summary</h3>

      <div className="cart-summary__row">
        <span>Subtotal</span>
        <strong>${subtotal.toFixed(2)}</strong>
      </div>

      <p className="cart-summary__note">
        Taxes and shipping are not included in this MVP.
      </p>
    </aside>
  )
}