import { Icon } from './Icon'
export default function Card({ icon, title, children, className = '', ...props }) {
  return (
    <article className={`card ${className}`} {...props}>
      {icon && (
        <span className="icon-tile">
          <Icon name={icon} />
        </span>
      )}
      <h3>{title}</h3>
      {children}
    </article>
  )
}
