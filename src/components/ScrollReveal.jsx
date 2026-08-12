import { useReveal } from '../hooks/useReveal'

export default function ScrollReveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const { ref, visible } = useReveal()

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
