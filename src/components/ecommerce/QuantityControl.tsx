interface QuantityControlProps {
  quantity: number
  onDecrease: () => void
  onIncrease: () => void
}

export function QuantityControl({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityControlProps) {
  return (
    <div className="quantity-control" aria-label="Quantity control">
      <button
        type="button"
        className="quantity-control__button"
        onClick={onDecrease}
      >
        -
      </button>

      <span className="quantity-control__value">{quantity}</span>

      <button
        type="button"
        className="quantity-control__button"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  )
}