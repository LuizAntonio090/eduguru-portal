export default function SectionHeader({ eyebrow, title, children, centered = false }) {
  return (
    <div className={`section-header ${centered ? 'centered' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}
