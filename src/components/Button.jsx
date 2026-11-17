import { Link } from 'react-router-dom'
export default function Button({ to, children, variant = 'primary', className = '', ...props }) {
  const classes = `button button-${variant} ${className}`
  return to ? (
    <Link to={to} className={classes} {...props}>
      {children}
    </Link>
  ) : (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
