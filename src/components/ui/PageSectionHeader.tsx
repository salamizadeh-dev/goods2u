interface PageSectionHeaderProps {
  title: string
  description?: string
}

export function PageSectionHeader({
  title,
  description,
}: PageSectionHeaderProps) {
  return (
    <div className="page-section-header">
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
    </div>
  )
}