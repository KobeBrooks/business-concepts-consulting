'use client'

export default function GlassCard({ children, className = '', onClick }) {
  return (
    <div 
      className={`
        backdrop-glass
        bg-glass
        shadow-glass
        rounded-2xl
        p-6
        ${className}
      `}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}

// export default function GlassCard({ children, className = '' }) {
//   return (
//     <div className={`
//       backdrop-glass
//       bg-glass
//       shadow-glass
//       rounded-2xl
//       p-6
//       ${className}
//     `}>
//       {children}
//     </div>
//   );
// }