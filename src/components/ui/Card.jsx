export default function Card({ 
  children, 
  className = '', 
  hoverable = false 
}) {
  const hoverClass = hoverable ? 'hover:shadow-xl transition' : ''
  
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${hoverClass} ${className}`}>
      {children}
    </div>
  )
}