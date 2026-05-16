import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const className =
    variant === 'secondary' ? 'button button--secondary' : 'button'

  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}